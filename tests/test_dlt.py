import numpy as np
import pandas as pd
import pytest
from orbit.dlt import DLT
from orbit.exceptions import IllegalArgument, EstimatorException


@pytest.mark.parametrize("infer_method", ["map", "vi", "mcmc"])
@pytest.mark.parametrize("predict_method", ["map", "mean", "median", "full"])
def test_fit_and_predict_univariate(
        synthetic_data, infer_method, predict_method, valid_sample_predict_method_combo):
    train_df, test_df, coef = synthetic_data

    if (infer_method, predict_method) in valid_sample_predict_method_combo:
        dlt = DLT(
            response_col='response',
            date_col='week',
            seasonality=52,
            infer_method=infer_method,
            predict_method=predict_method,
            num_warmup=50,
        )

        dlt.fit(train_df)
        predict_df = dlt.predict(test_df)

        # assert number of posterior param keys
        if infer_method == 'map':
            assert len(dlt.posterior_samples) == 25
        else:
            assert len(dlt.posterior_samples) == 13

        # assert output shape
        if predict_method == 'full':
            expected_columns = ['week', 5, 50, 95]
            expected_shape = (51, len(expected_columns))
            assert predict_df.shape == expected_shape
            assert predict_df.columns.tolist() == expected_columns
        else:
            expected_columns = ['week', 'prediction']
            expected_shape = (51, len(expected_columns))
            assert predict_df.shape == expected_shape
            assert predict_df.columns.tolist() == expected_columns

    else:
        with pytest.raises(EstimatorException):
            dlt = DLT(
                response_col='response',
                date_col='week',
                seasonality=52,
                infer_method=infer_method,
                predict_method=predict_method,
                num_warmup=50
            )
            dlt.fit(train_df)


@pytest.mark.parametrize("global_trend_option", ["linear", "loglinear", "logistic", "flat"])
def test_fit_and_predict_with_glb_trend(synthetic_data, global_trend_option):
    train_df, test_df, coef = synthetic_data

    dlt = DLT(
        response_col='response',
        date_col='week',
        seasonality=52,
        infer_method='map',
        predict_method='map',
        global_trend_option=global_trend_option,
    )

    dlt.fit(train_df)
    predict_df = dlt.predict(test_df)

    # assert number of posterior param keys
    if global_trend_option in ['linear','loglinear','logistic']:
        assert len(dlt.posterior_samples) == 25

    expected_columns = ['week', 'prediction']
    expected_shape = (51, len(expected_columns))
    assert predict_df.shape == expected_shape
    assert predict_df.columns.tolist() == expected_columns

    dlt.fit(train_df)

@pytest.mark.parametrize("infer_method", ["map", "vi", "mcmc"])
@pytest.mark.parametrize("predict_method", ["map", "mean", "median", "full"])
@pytest.mark.parametrize(
    "regressor_signs",
    [
        ["+", "+", "+", "+", "+", "+"],
        ["=", "=", "=", "=", "=", "="],
        ["+", "=", "+", "=", "+", "+"]
    ],
    ids=['positive_only', 'regular_only', 'mixed_signs']
)
def test_fit_and_predict_with_regression(
        synthetic_data, infer_method, predict_method,
        regressor_signs, valid_sample_predict_method_combo):
    train_df, test_df, coef = synthetic_data

    if (infer_method, predict_method) in valid_sample_predict_method_combo:
        dlt = DLT(
            response_col='response',
            date_col='week',
            regressor_col=train_df.columns.tolist()[2:],
            regressor_sign=regressor_signs,
            seasonality=52,
            infer_method=infer_method,
            predict_method=predict_method,
            num_warmup=50
        )

        dlt.fit(train_df)
        predict_df = dlt.predict(test_df)

        num_regressors = dlt.get_regression_coefs().shape[0]

        assert num_regressors == len(train_df.columns.tolist()[2:])

        # assert output shape
        if predict_method == 'full':
            expected_columns = ['week', 5, 50, 95]
            expected_shape = (51, len(expected_columns))

            assert predict_df.shape == expected_shape
            assert predict_df.columns.tolist() == expected_columns
        else:
            expected_columns = ['week', 'prediction']
            expected_shape = (51, len(expected_columns))

            assert predict_df.shape == expected_shape
            assert predict_df.columns.tolist() == expected_columns

    else:
        with pytest.raises(EstimatorException):
            dlt = DLT(
                response_col='response',
                date_col='week',
                seasonality=52,
                infer_method=infer_method,
                predict_method=predict_method,
                num_warmup=50
            )
            dlt.fit(train_df)


@pytest.mark.parametrize("infer_method", ["map", "vi", "mcmc"])
@pytest.mark.parametrize("predict_method", ["map", "mean", "median", "full"])
def test_fit_and_decomp_with_regression(
        synthetic_data, infer_method, predict_method, valid_sample_predict_method_combo):
    train_df, test_df, coef = synthetic_data

    if (infer_method, predict_method) in valid_sample_predict_method_combo:
        dlt = DLT(
            response_col='response',
            date_col='week',
            regressor_col=train_df.columns.tolist()[2:],
            seasonality=52,
            infer_method=infer_method,
            predict_method=predict_method,
            num_warmup=50
        )
        dlt.fit(train_df)

        # full should raise illegal argument
        if predict_method == 'full':
            with pytest.raises(IllegalArgument):
                dlt.predict(test_df, decompose=True)

        else:
            predict_df = dlt.predict(test_df, decompose=True)

            expected_columns = ['week', 'prediction', 'trend', 'seasonality', 'regression']
            expected_shape = (51, len(expected_columns))

            assert predict_df.shape == expected_shape
            assert predict_df.columns.tolist() == expected_columns

    else:
        with pytest.raises(EstimatorException):
            dlt = DLT(
                response_col='response',
                date_col='week',
                seasonality=52,
                infer_method=infer_method,
                predict_method=predict_method,
                num_warmup=50
            )
            dlt.fit(train_df)


def test_dlt_invalid_init_params():
    with pytest.raises(IllegalArgument):
        dlt = DLT(
            some_non_existent_param='invalid'
        )
        return dlt


def test_invalid_regressor_column(iclaims_training_data):
    dlt = DLT(
        response_col='claims',
        date_col='week',
        seasonality=52,
        chains=4,
        predict_method='mean',
        regressor_col=['wrong_column_name']
    )

    with pytest.raises(IllegalArgument):
        dlt.fit(df=iclaims_training_data)


def test_predict_subset_of_train(iclaims_training_data):
    dlt = DLT(
        response_col='claims',
        date_col='week',
        seasonality=52,
        chains=4,
    )

    dlt.fit(df=iclaims_training_data)

    predicted_df = dlt.predict(df=iclaims_training_data[:100])

    expected_shape = (100, 4)
    expected_start_date = pd.to_datetime('2010-01-03')
    expected_end_date = pd.to_datetime('2011-11-27')

    assert predicted_df.shape == expected_shape
    assert min(predicted_df['week']) == expected_start_date
    assert max(predicted_df['week']) == expected_end_date


def test_invalid_date_order():
    dlt = DLT(
        response_col='claims',
        date_col='week',
    )

    claims = np.random.randn(5)
    week1 = pd.to_datetime(['2019-01-01', '2019-01-02', '2019-01-03', '2019-01-03', '2019-01-04'])
    week2 = pd.to_datetime(['2019-01-01', '2019-01-02', '2019-01-03', '2018-12-31', '2019-01-04'])

    df1 = pd.DataFrame({'week': week1, 'claims': claims})
    df2 = pd.DataFrame({'week': week2, 'claims': claims})

    # catch repeating weeks
    with pytest.raises(IllegalArgument):
        dlt.fit(df1)

    # catch unordered weeks
    with pytest.raises(IllegalArgument):
        dlt.fit(df2)


def test_fit_monthly_data(m3_monthly_data):
    dlt = DLT(response_col='value',
              date_col='date',
              seasonality=12,
              infer_method='mcmc',
              predict_method='full')

    # multiple fits should not raise exceptions
    dlt.fit(df=m3_monthly_data)
    dlt.fit(df=m3_monthly_data)

    predicted_df = dlt.predict(df=m3_monthly_data)

    expected_columns = ['date', 5, 50, 95]
    expected_shape = (68, len(expected_columns))

    assert predicted_df.shape == expected_shape
    assert list(predicted_df.columns) == expected_columns
