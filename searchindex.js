Search.setIndex({docnames:["index","installation","modules","orbit","orbit.constants","orbit.diagnostics","orbit.estimators","orbit.models","orbit.pyro","orbit.utils","tutorials","tutorials/backtest","tutorials/decompose_prediction","tutorials/model_diagnostics","tutorials/pyro_basic","tutorials/quick_start_DLT","tutorials/quick_start_LGT","tutorials/regression","tutorials/utilities_simulation"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,nbsphinx:3,sphinx:56},filenames:["index.rst","installation.rst","modules.rst","orbit.rst","orbit.constants.rst","orbit.diagnostics.rst","orbit.estimators.rst","orbit.models.rst","orbit.pyro.rst","orbit.utils.rst","tutorials.rst","tutorials/backtest.ipynb","tutorials/decompose_prediction.ipynb","tutorials/model_diagnostics.ipynb","tutorials/pyro_basic.ipynb","tutorials/quick_start_DLT.ipynb","tutorials/quick_start_LGT.ipynb","tutorials/regression.ipynb","tutorials/utilities_simulation.ipynb"],objects:{"":{orbit:[3,0,0,"-"]},"orbit.constants":{constants:[4,0,0,"-"],dlt:[4,0,0,"-"],lgt:[4,0,0,"-"],palette:[4,0,0,"-"]},"orbit.constants.constants":{BacktestAnalyzeKeys:[4,1,1,""],BacktestFitColumnNames:[4,1,1,""],DateInfo:[4,1,1,""],EstimatorOptionsMapper:[4,1,1,""],InferMethod:[4,1,1,""],PlotLabels:[4,1,1,""],PredictMethod:[4,1,1,""],PredictedComponents:[4,1,1,""],PredictionColumnNames:[4,1,1,""],StanModelKeys:[4,1,1,""],TimeSeriesSplitSchemeNames:[4,1,1,""]},"orbit.constants.constants.BacktestAnalyzeKeys":{METRIC_GEO:[4,2,1,""],METRIC_NAME:[4,2,1,""],METRIC_PER_BTMOD:[4,2,1,""],METRIC_PER_HORIZON:[4,2,1,""]},"orbit.constants.constants.BacktestFitColumnNames":{ACTUAL:[4,2,1,""],FORECAST_DATES:[4,2,1,""],PRED:[4,2,1,""],PRED_HORIZON:[4,2,1,""],TRAIN_END_DATE:[4,2,1,""],TRAIN_START_DATE:[4,2,1,""]},"orbit.constants.constants.DateInfo":{DATE_COLUMN:[4,2,1,""],DATE_COLUMN_NAME:[4,2,1,""],DATE_INTERVAL:[4,2,1,""],END_DATE:[4,2,1,""],START_DATE:[4,2,1,""]},"orbit.constants.constants.EstimatorOptionsMapper":{ENGINE_TO_SAMPLE:[4,2,1,""],SAMPLE_TO_PREDICT:[4,2,1,""]},"orbit.constants.constants.InferMethod":{MAP:[4,2,1,""],MARKOV_CHAIN_MONTE_CARLO:[4,2,1,""],VARIATIONAL_INFERENCE:[4,2,1,""]},"orbit.constants.constants.PlotLabels":{ACTUAL_RESPONSE:[4,2,1,""],PREDICTED_RESPONSE:[4,2,1,""],TRAINING_ACTUAL_RESPONSE:[4,2,1,""]},"orbit.constants.constants.PredictMethod":{FULL_SAMPLING:[4,2,1,""],MAP:[4,2,1,""],MEAN:[4,2,1,""],MEDIAN:[4,2,1,""]},"orbit.constants.constants.PredictedComponents":{REGRESSION:[4,2,1,""],SEASONALITY:[4,2,1,""],TREND:[4,2,1,""]},"orbit.constants.constants.PredictionColumnNames":{ACTUAL_RESPONSE:[4,2,1,""],LEVEL:[4,2,1,""],PREDICTED_RESPONSE:[4,2,1,""],REGRESSOR:[4,2,1,""],SEASONALITY:[4,2,1,""]},"orbit.constants.constants.StanModelKeys":{DATE_INFO:[4,2,1,""],MODELS:[4,2,1,""],REGRESSOR_COLUMNS:[4,2,1,""],RESPONSE_COLUMN:[4,2,1,""],STAN_INPUTS:[4,2,1,""]},"orbit.constants.constants.TimeSeriesSplitSchemeNames":{MODEL:[4,2,1,""],TEST_IDX:[4,2,1,""],TRAIN_END_DATE:[4,2,1,""],TRAIN_IDX:[4,2,1,""],TRAIN_START_DATE:[4,2,1,""]},"orbit.constants.dlt":{BaseSamplingParameters:[4,1,1,""],DataInputMapper:[4,1,1,""],GlobalTrendOption:[4,1,1,""],GlobalTrendSamplingParameters:[4,1,1,""],LatentSamplingParameters:[4,1,1,""],RegressionPenalty:[4,1,1,""],RegressionSamplingParameters:[4,1,1,""],SeasonalitySamplingParameters:[4,1,1,""]},"orbit.constants.dlt.BaseSamplingParameters":{LEVEL_SMOOTHING_FACTOR:[4,2,1,""],LOCAL_TREND:[4,2,1,""],LOCAL_TREND_LEVELS:[4,2,1,""],LOCAL_TREND_SLOPES:[4,2,1,""],RESIDUAL_DEGREE_OF_FREEDOM:[4,2,1,""],RESIDUAL_SIGMA:[4,2,1,""],SLOPE_SMOOTHING_FACTOR:[4,2,1,""]},"orbit.constants.dlt.DataInputMapper":{AUTO_RIDGE_SCALE:[4,2,1,""],DAMPED_FACTOR:[4,2,1,""],LASSO_SCALE:[4,2,1,""]},"orbit.constants.dlt.GlobalTrendOption":{flat:[4,2,1,""],linear:[4,2,1,""],logistic:[4,2,1,""],loglinear:[4,2,1,""]},"orbit.constants.dlt.GlobalTrendSamplingParameters":{GLOBAL_TREND:[4,2,1,""],GLOBAL_TREND_LEVEL:[4,2,1,""],GLOBAL_TREND_SLOPE:[4,2,1,""]},"orbit.constants.dlt.LatentSamplingParameters":{INITIAL_SEASONALITY:[4,2,1,""],REGRESSION_NEGATIVE_COEFFICIENTS:[4,2,1,""],REGRESSION_POSITIVE_COEFFICIENTS:[4,2,1,""],REGRESSION_REGULAR_COEFFICIENTS:[4,2,1,""]},"orbit.constants.dlt.RegressionPenalty":{auto_ridge:[4,2,1,""],fixed_ridge:[4,2,1,""],lasso:[4,2,1,""]},"orbit.constants.dlt.RegressionSamplingParameters":{REGRESSION_COEFFICIENTS:[4,2,1,""]},"orbit.constants.dlt.SeasonalitySamplingParameters":{SEASONALITY_LEVELS:[4,2,1,""],SEASONALITY_SMOOTHING_FACTOR:[4,2,1,""]},"orbit.constants.lgt":{BaseSamplingParameters:[4,1,1,""],DataInputMapper:[4,1,1,""],LatentSamplingParameters:[4,1,1,""],RegressionPenalty:[4,1,1,""],RegressionSamplingParameters:[4,1,1,""],SeasonalitySamplingParameters:[4,1,1,""]},"orbit.constants.lgt.BaseSamplingParameters":{GLOBAL_TREND_COEF:[4,2,1,""],GLOBAL_TREND_POWER:[4,2,1,""],LEVEL_SMOOTHING_FACTOR:[4,2,1,""],LOCAL_GLOBAL_TREND_SUMS:[4,2,1,""],LOCAL_TREND_COEF:[4,2,1,""],LOCAL_TREND_LEVELS:[4,2,1,""],LOCAL_TREND_SLOPES:[4,2,1,""],RESIDUAL_DEGREE_OF_FREEDOM:[4,2,1,""],RESIDUAL_SIGMA:[4,2,1,""],SLOPE_SMOOTHING_FACTOR:[4,2,1,""]},"orbit.constants.lgt.DataInputMapper":{AUTO_RIDGE_SCALE:[4,2,1,""],LASSO_SCALE:[4,2,1,""]},"orbit.constants.lgt.LatentSamplingParameters":{INITIAL_SEASONALITY:[4,2,1,""],REGRESSION_NEGATIVE_COEFFICIENTS:[4,2,1,""],REGRESSION_POSITIVE_COEFFICIENTS:[4,2,1,""],REGRESSION_REGULAR_COEFFICIENTS:[4,2,1,""]},"orbit.constants.lgt.RegressionPenalty":{auto_ridge:[4,2,1,""],fixed_ridge:[4,2,1,""],lasso:[4,2,1,""]},"orbit.constants.lgt.RegressionSamplingParameters":{REGRESSION_COEFFICIENTS:[4,2,1,""]},"orbit.constants.lgt.SeasonalitySamplingParameters":{SEASONALITY_LEVELS:[4,2,1,""],SEASONALITY_SMOOTHING_FACTOR:[4,2,1,""]},"orbit.constants.palette":{QualitativePalette:[4,1,1,""]},"orbit.constants.palette.QualitativePalette":{Bar5:[4,2,1,""],Line4:[4,2,1,""],PostQ:[4,2,1,""],Rainbow8:[4,2,1,""],Stack:[4,2,1,""]},"orbit.diagnostics":{plot:[5,0,0,"-"]},"orbit.diagnostics.plot":{metric_horizon_barplot:[5,3,1,""],plot_posterior_params:[5,3,1,""],plot_predicted_components:[5,3,1,""],plot_predicted_data:[5,3,1,""]},"orbit.estimators":{base_estimator:[6,0,0,"-"],pyro_estimator:[6,0,0,"-"],stan_estimator:[6,0,0,"-"]},"orbit.estimators.base_estimator":{BaseEstimator:[6,1,1,""]},"orbit.estimators.base_estimator.BaseEstimator":{fit:[6,4,1,""]},"orbit.estimators.pyro_estimator":{PyroEstimator:[6,1,1,""],PyroEstimatorMAP:[6,1,1,""],PyroEstimatorVI:[6,1,1,""]},"orbit.estimators.pyro_estimator.PyroEstimator":{fit:[6,4,1,""]},"orbit.estimators.pyro_estimator.PyroEstimatorMAP":{fit:[6,4,1,""]},"orbit.estimators.pyro_estimator.PyroEstimatorVI":{fit:[6,4,1,""]},"orbit.estimators.stan_estimator":{StanEstimator:[6,1,1,""],StanEstimatorMAP:[6,1,1,""],StanEstimatorMCMC:[6,1,1,""],StanEstimatorVI:[6,1,1,""]},"orbit.estimators.stan_estimator.StanEstimator":{fit:[6,4,1,""]},"orbit.estimators.stan_estimator.StanEstimatorMAP":{fit:[6,4,1,""]},"orbit.estimators.stan_estimator.StanEstimatorMCMC":{fit:[6,4,1,""]},"orbit.estimators.stan_estimator.StanEstimatorVI":{fit:[6,4,1,""]},"orbit.exceptions":{BacktestException:[3,5,1,""],EstimatorException:[3,5,1,""],IllegalArgument:[3,5,1,""],ModelException:[3,5,1,""],PredictionException:[3,5,1,""]},"orbit.models":{base_model:[7,0,0,"-"],dlt:[7,0,0,"-"],lgt:[7,0,0,"-"]},"orbit.models.base_model":{BaseModel:[7,1,1,""]},"orbit.models.dlt":{BaseDLT:[7,1,1,""],DLTAggregated:[7,1,1,""],DLTFull:[7,1,1,""],DLTMAP:[7,1,1,""]},"orbit.models.dlt.BaseDLT":{get_regression_coefs:[7,4,1,""]},"orbit.models.dlt.DLTAggregated":{get_regression_coefs:[7,4,1,""]},"orbit.models.dlt.DLTFull":{get_regression_coefs:[7,4,1,""]},"orbit.models.dlt.DLTMAP":{get_regression_coefs:[7,4,1,""]},"orbit.models.lgt":{BaseLGT:[7,1,1,""],LGTAggregated:[7,1,1,""],LGTFull:[7,1,1,""],LGTMAP:[7,1,1,""]},"orbit.models.lgt.BaseLGT":{get_regression_coefs:[7,4,1,""]},"orbit.models.lgt.LGTAggregated":{get_regression_coefs:[7,4,1,""]},"orbit.models.lgt.LGTFull":{get_regression_coefs:[7,4,1,""]},"orbit.models.lgt.LGTMAP":{get_regression_coefs:[7,4,1,""]},"orbit.orbit":{Orbit:[3,1,1,""]},"orbit.pyro":{lgt:[8,0,0,"-"]},"orbit.pyro.lgt":{Model:[8,1,1,""]},"orbit.pyro.lgt.Model":{max_plate_nesting:[8,2,1,""]},"orbit.utils":{general:[9,0,0,"-"],pyro:[9,0,0,"-"],stan:[9,0,0,"-"]},"orbit.utils.general":{get_parent_path:[9,3,1,""],is_empty_dataframe:[9,3,1,""],is_ordered_datetime:[9,3,1,""],update_dict:[9,3,1,""]},"orbit.utils.pyro":{get_pyro_model:[9,3,1,""]},"orbit.utils.stan":{compile_stan_model:[9,3,1,""],get_compiled_stan_model:[9,3,1,""]},orbit:{constants:[4,0,0,"-"],diagnostics:[5,0,0,"-"],estimators:[6,0,0,"-"],exceptions:[3,0,0,"-"],models:[7,0,0,"-"],orbit:[3,0,0,"-"],pyro:[8,0,0,"-"],utils:[9,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"],"4":["py","method","Python method"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:function","4":"py:method","5":"py:exception"},terms:{"000000":17,"001":17,"001808":11,"0027203":17,"002738":11,"002742":11,"00282248":18,"003115":11,"006283":11,"0062834":11,"006391":11,"006405":11,"006412":11,"006417":[15,16,17],"0064769":11,"006477":11,"0066297":11,"0069549":11,"006955":11,"007046":11,"0070464":11,"00739299":18,"0074489":11,"007449":11,"0078637":11,"0088091":11,"0094182":11,"011019":17,"01162034":18,"012710":11,"01545216":18,"018626":[15,16,17],"01883928":18,"019628":11,"02173615":18,"023089":11,"025064":11,"031756":17,"034828":11,"035039":11,"035758":17,"041438":11,"042711":17,"049004":11,"05231785":17,"053327":17,"056018":17,"059123":15,"059456":11,"059517":[11,13],"05it":11,"060341":16,"06d6a0ff":4,"070016":[11,12,13],"071726":[11,13],"073b4cff":4,"077079":[15,16,17],"081371":11,"083354":[11,12,13],"091117":15,"097038":11,"097858":16,"099949":16,"0x134a0efd0":15,"0x13e434810":17,"100":[6,11,14,16],"1000":[12,13,15,16,17],"101":[6,14],"102451":[11,12,13],"103":15,"1075":11,"1076":11,"1077":11,"1078":11,"1079":11,"1080":11,"109514":[15,16,17],"110832":15,"111589":17,"11182046":17,"113033":[11,12,13],"116":15,"117888":15,"118473":16,"118ab2ff":4,"120096":[15,16,17],"123":15,"125509":17,"125c77":4,"126":15,"12939a":4,"130":14,"132":15,"134":15,"136342":17,"136399":17,"137":15,"137549":[11,12,13,15,16,17],"138":15,"139519":16,"149":16,"152346":[11,12,13],"154":15,"15602066":17,"1586677":18,"16325487":17,"164326":[11,12,13],"166":16,"168876":[11,12,13],"170938":15,"171390":[15,16,17],"173141":15,"173674":16,"174":17,"178334":15,"17b8be":4,"185136":[11,12,13],"192392":17,"193468":16,"196728":11,"196760":[11,12,13,15,16,17],"1e96b":4,"1fc600":4,"200":[17,18],"200898":16,"2010":[11,12,13,15,16,17],"2014":[15,16,17],"2016":[12,17],"2017":[11,12],"2018":[11,12,15,16,17],"2020":[12,17,18],"2021":[11,12,13,17],"204437":16,"204695":[11,12,13],"210990":11,"221336":11,"223759":11,"226354":11,"232984":16,"233":16,"233342":[15,16,17],"233509":16,"235614":15,"235667":15,"236411":15,"238797":11,"239122":16,"240312":17,"241044":15,"247008":16,"247657":11,"248319":17,"249":16,"252":17,"252323":[11,12,13],"256724":17,"25it":11,"261":14,"262561":16,"267156":15,"272345":17,"273183":11,"275301":15,"277510":11,"280970":[15,16,17],"281816":16,"282595":15,"289549":15,"292064":17,"293869":16,"294":15,"299122":15,"2b4ae6":4,"2be669":4,"300603":17,"302334":[11,12,13],"324617":[15,16,17],"328309":[11,12,13],"329424":15,"330652":16,"330981":[15,16,17],"33126796":18,"341881":16,"356956":[15,16,17],"363306":11,"365":18,"365385":15,"375408":11,"377717":[11,13],"379":11,"37it":11,"380":11,"382156":15,"383324":16,"383376":[15,16,17],"384388":15,"386595":[11,12,13,15,16,17],"393263":11,"396896":11,"398741":[11,12,13,15,16,17],"399":11,"39it":11,"400":11,"4000":17,"403698":11,"408502":17,"408782":16,"414711":11,"416744":17,"418941":11,"419":11,"420":11,"424317":11,"428310":[15,16,17],"434527":11,"436476":[11,13],"439":11,"440959":17,"443125":11,"452451":11,"454779":[11,13],"457475":17,"458371":17,"462627":[11,13],"463943":[15,16,17],"476842":11,"480203":[15,16,17],"481411":[11,13],"496732":[15,16,17],"49it":11,"4dc19c":4,"500":[17,18],"502375":[11,13],"507383":11,"50th":[7,15,16],"518":16,"518897":[11,13],"51it":11,"526075":[11,13],"533307":11,"535811":17,"536330":11,"543985":17,"546676":17,"565725":[15,16,17],"566146":11,"568616":11,"593637":17,"598259":[15,16,17],"604467":11,"606106":[15,16,17],"624218":[11,12,13,15,16,17],"630103":17,"641167":11,"645855":[15,16,17],"64657747604057":11,"662377":[15,16,17],"666333":17,"669555":[15,16,17],"67144746151623":11,"675586":11,"691451":11,"709102":17,"712341458856958":11,"713783":17,"724856":17,"769532":11,"776e57":4,"777193":11,"783007":11,"7974205":18,"799671":11,"804694":11,"829ae3":4,"844820":17,"85it":11,"880252":17,"88572c":4,"8888":[6,14,15,16,17],"89dac1":4,"900":6,"908227":11,"95it":11,"9bf6ffff":4,"abstract":6,"boolean":[5,9],"case":[11,15],"class":[3,4,6,7,8,16],"default":[5,6,7,11,13,15,17],"enum":4,"export":11,"final":6,"float":[5,6,7],"function":[7,9,11,15,16,17,18],"import":[11,12,13,14,15,16,17,18],"int":[5,6,7],"return":[5,6,7,9,11,15,16],"switch":15,"true":[4,5,6,9,11,12,13,15,17],"try":[16,17],"while":[11,15,16,17],FOR:11,For:[4,11,15],Such:[6,17],THE:11,That:11,The:[4,7,9,11,12,13,15,17],There:[11,13,15],These:17,Used:7,_modul:6,_posterior_sampl:17,_subplot:15,_supported_estimator_typ:7,a0c4ffff:4,abov:17,abs:11,absolut:9,activ:14,actual:[4,5,11,13],actual_col:[5,12,14,15,16,17],actual_respons:4,adapt_delta:[16,17],add:17,added:17,adding:17,addit:[6,7,11,15,16],administr:[11,12,13],advantag:14,after:[7,11,12,13,15,16,17],again:11,against:[15,16,17],aggreg:[4,7,15,16],aggregate_method:[7,15,16],aim:[15,16,17],aka:[7,15,16],algorithm:6,all:[4,6,7,11,12,13,15,16,17],allow:[15,16],along:[7,15,16],alpha:17,also:[11,12,14,15,16,17],alwai:[7,11,15,16],amp:17,analysi:4,ani:[7,11,15,16],annual:18,anon_model_4ee480de54261177d10b47d0d1ba4286:11,anoth:15,api:[0,11,15,16,17],append_dict:9,appli:17,applic:7,arg:[6,7,11],arguemnt:15,argument:[7,17],arima:18,arima_process:18,arma_trend:18,armaprocess:18,arrai:[6,9,17,18],assign:17,assum:[15,17],assumpt:15,auto:17,auto_ridg:[4,7,17],auto_ridge_scal:[4,7,17],automat:11,avail:[4,15,16],avoid:[7,11,17],axes:15,axessubplot:15,axi:17,axs:17,b3ad9:4,b7885e:4,b_t:15,back:[4,11],backtest:10,backtestanalyzekei:4,backtestexcept:3,backtestfitcolumnnam:4,bank:[11,12,13,15,16,17],bar5:4,bar_width:5,base:[3,4,6,7,8,11],base_estim:[2,3],base_model:[2,3],basedlt:7,baseestim:[6,7],baseet:7,baselgt:7,basemodel:7,basesamplingparamet:4,basic:[11,12,13],bayesian:[15,16,17],bdb2ffff:4,been:[5,17],befor:[7,13,15,16],behavior:15,below:[11,15,17],benefit:[15,16,17],best:11,best_param:11,beta:[4,7],beta_:17,beta_j:15,between:[5,7,11,13,15,17],bin:5,black:17,bool:[5,6],bootstrap:7,both:[6,11,12],bound:5,built:[11,14],caffbfff:4,calcul:11,call:[5,11,12,13,15,16,17],callabl:11,can:[7,11,12,13,15,16,17],categor:4,cauchi:17,certain:[11,13],chain:[6,13,17],chains:[5,13],changpoint:17,chart:[5,13,17],check:[11,13,18],check_hmc_diagnost:[12,13,15,16,17],child:6,choic:15,ci_level:5,claim:[14,15,16,17],clear:17,clearli:12,clipped_adam:6,clippedadam:6,clone:1,closer:17,code:11,coef:[17,18],coef_:18,coef_auto_ridg:17,coeffici:[7,11,18],color:17,colum:[11,13],column:[4,5,7,11,12,15,16,17],com:1,combin:11,come:11,commun:14,compar:[11,14,17],compil:[9,11],compile_stan_model:9,compon:[4,5,15,18],componenet:5,compont:12,compos:11,comput:[11,14],concret:7,condit:15,confid:[5,7,13],config:[6,11,17],consist:[5,11,17],consol:6,constant:[2,3,5,17,18],constrain:7,contain:[15,16,17],content:2,contributor:14,control:6,converg:13,copi:[11,12,13],copmpars:17,core:[0,6],correspond:5,cosin:18,could:[13,17],count:[12,13,15,16,17],covid:17,cpu:[14,15,16,17],cpu_count:6,creat:16,criteria:11,cross:11,current:[5,7,11,13],current_file_path:9,custom:11,cut:11,da70bf:4,dai:[4,15,18],damp:15,damped_factor:[4,7],dampen:7,data:[4,5,6,8,10],data_input:6,datafram:[5,7,9,15,17],datainputmapp:4,dataset:[11,12,13,14,15,16],date:[4,5,11,16,17],date_col:[5,11,12,13,14,15,16,17],date_column:4,date_column_nam:4,date_info:4,date_interv:4,date_rang:17,dateinfo:4,dateset:17,datetim:15,datetime64:[15,16,17],ddb27c:4,decai:[6,15],decompons:12,decompos:[4,5,10,15],decomposit:12,decreas:12,deep:14,deeper:11,def:11,default_rng:17,defin:[5,7,11,16,18],definit:6,delta:11,demonstart:17,demonstr:[12,13],densiti:5,depend:[12,15],detail:[6,11,15,16,17],determin:[7,11,12,13],determinst:15,develop:14,df_tmp:[11,12,13],diagnos:13,diagnost:[2,3,6,10,11,12,14,15,16,17],diagon:5,dict:6,dictionari:4,differ:[5,11,13,15,17],dir:5,direct:17,discard:6,discret:4,displai:14,dive:11,diverg:[16,17],dlt:[2,3,10,11,12,13,17],dlt_log:15,dlt_logit:15,dlt_mcmc:13,dlt_reg:17,dlt_reg_adjust:17,dltaggreg:[7,13],dltfull:[7,12,13,17],dltmap:[7,11,12,13],doc:[0,6],docstr:[11,15,16],doesn:11,done:[11,17],dot:5,downstream:4,draw:[6,7],drop:17,dts:15,dtype:[15,16,17],due:[15,16,17],durat:18,dure:17,e62ba8:4,e6c72b:4,e79fd5:4,each:[7,11,13,15,16],earlier:11,easili:11,ef476fff:4,effect:17,element:[5,7],elig:[11,12,13],employ:[11,12,13],empti:[7,9],end:[11,16,17],end_dat:[4,17],engin:[11,14],engine_to_sampl:4,enumer:4,epsilon:15,equat:[15,16],error:11,estim:[2,3,7,14,17],estimator_typ:[7,14],estimatorexcept:3,estimatoroptionsmapp:4,ets:7,etsaggreg:7,etsful:7,etsmap:7,evalu:11,even:11,event:15,everi:6,ex_splitt:11,ex_splitter2:11,exact:5,exampl:[4,11,12,13,14,17],exceed:[12,13,15,16,17],except:2,exist:[15,16],exogen:15,expens:11,exponenti:[12,15],extend:[11,17],extract:6,f15c17:4,f6d18a:4,f89570:4,factor:[6,15],fals:[5,6,9,11,13],fdffb6ff:4,featur:15,feder:[11,12,13,15,16,17],few:[15,16,17],ff4500:4,ff991f:4,ffadadff:4,ffc6ffff:4,ffcb99:4,ffd166ff:4,ffd6a5ff:4,fig:[5,17],figsiz:[5,11,12,13,17,18],figur:[5,12,17,18],file:[4,6,9,11,12,13],fill:[11,12,13,15,16,17],filter:11,filterwarn:[11,12,13,15],find:11,fine:11,first:[4,11,12,13],fit:[4,6,12,15,16,17,18],fit_predict:11,fitted_model:11,fivethirtyeight:[17,18],fix:[11,17],fixed_ridg:[4,7],flat:[4,7,12,13,16,17],flexibl:14,float64:[15,16,17],float_format:14,fold:11,follow:[11,12,15,16],fontsiz:5,forecast:[7,11,12,15],forecast_d:4,forecast_len:11,form:[12,17],format:[4,11,17],forward:11,four:15,frame:[4,5],fred:[11,12,13],freq:[15,17],from:[1,4,5,6,7,11,12,13,14,15,16,17,18],fromt:11,full:[4,7,14,15,16],full_sampl:4,further:[7,12,17],futur:12,future_df:[12,15],g_t:15,gaug:11,gaussian:17,gener:[2,3,13,15,17,18],genertor:11,genetor:11,get:[13,18],get_compiled_stan_model:9,get_fitted_model:11,get_parent_path:9,get_predicted_df:11,get_pyro_model:9,get_regression_coef:[7,11,17],get_splitt:11,ggplot:11,git:1,github:[1,15,16],give:[9,12,13],given:[4,9],gloabl:15,global:[7,16],global_trend:4,global_trend_coef:4,global_trend_level:4,global_trend_opt:[7,12,15],global_trend_pow:4,global_trend_slop:4,globaltrendopt:4,globaltrendsamplingparamet:4,googl:[15,16,17],graph:12,green:[11,17],grid:17,grid_search_orbit:11,ground:17,group:11,grow:11,growh:15,growth:15,gspc:17,gt_coef:4,gt_pow:4,gt_sum:4,guess:14,half:17,hand:11,handi:11,has:[5,11,13,17],hash:4,hat:[12,15],have:[15,16,17],head:[11,12,13,15,16,17],henc:14,here:[11,12,13,14,15,16,17],histogram:5,histor:[11,17],hoc:11,holidai:15,hood:11,hourli:18,how:[11,13,14,15,16,17],html:[6,15,16,18],http:[1,6,11,12,13,15,16,18],huge:17,hyper:11,hyperparamet:7,hyperparmet:11,hyperprior:17,iclaims_exampl:[15,16,17],icliam:17,icnsa:[11,12,13],ignor:[11,12,13,15],illegalargu:3,illustr:[11,14],impact:17,implement:11,incl_smooth_param:[5,13],incl_trend_param:[5,13],includ:[5,17,18],include_training_metr:11,incopor:11,increas:11,incremental_len:11,independ:6,index:[0,11,17],indic:[5,7,11,17],individu:[11,12,13],inf:7,infer:[6,14],infermethod:4,info:[11,14],inform:[5,7,11,13,15],init_sea:4,init_valu:6,initi:[6,7,15,16,17],initial_season:4,inlin:[11,12,13,14,17,18],inplac:[11,12,13],input:[4,6,9],instal:0,instanc:16,instanti:[7,11,14],instead:[7,11,15,17],insur:[11,12,13],integ:7,interest:11,interfac:11,interv:[5,7,13],introduc:15,is_empty_datafram:9,is_multipl:15,is_ordered_datetim:9,is_training_metr:11,is_vis:5,iter:[11,13,16,17],its:[7,11,16],jan:[15,16,17],januari:[11,12,13],job:[11,12,13,15,16,17],june:[15,16,17],just:[11,14],kei:[4,6,11],kind:[5,13],knowledg:17,known:15,kwarg:[6,7],l_t:15,label:[5,17],lambda:14,larger:[7,16,17],lasso:[4,7],lasso_scal:[4,7],last:[11,12,13],last_dt:15,latent:4,latentsamplingparamet:4,learn:6,learning_r:[6,14],learning_rate_total_decai:6,left_on:11,legend:17,lenght:17,length:[7,11,17],let:[11,12,13],lev_sm:4,level:[3,4,5,11],level_sm_input:11,level_smoothing_factor:4,leverag:17,lgt:[2,3,10,11,14,15],lgt_map:14,lgt_sum:4,lgt_vi:14,lgtaggreg:[7,11,14],lgtfull:[7,14],lgtmap:[7,11,14],lgtnap:7,librari:14,like:[14,17],line2d:17,line4:[4,17],line:17,linear:[4,7,12],linear_model:[17,18],linearregress:[17,18],linestyl:17,linewidth:17,list:[5,6,7,11,17],load:[9,11,12,13,15,16,17],load_iclaim:[11,12,13,14,15,16,17],local:[15,16],local_global_trend_sum:4,local_trend:4,local_trend_coef:4,local_trend_level:4,local_trend_slop:4,log1p:17,log:[16,17],logist:[4,7],loglinear:[4,7,15],look:17,loop:11,lose:15,loui:[11,12,13,15,16,17],lower:5,lrd:6,lt_coef:4,lt_sum:4,made:5,mae:11,mai:[5,11,13],main:[11,15],mainli:15,maintain:[14,15],make_regress:[17,18],make_season:18,make_trend:18,map:[4,6,7,15,16],mape:11,mapper:4,markov:13,markov_chain_monte_carlo:4,match:11,mathtt:15,matplotlib:[5,11,12,13,14,15,17,18],max:[6,7,17],max_plate_nest:[8,14],maximum:[7,12,13,15,16,17],mcmc:[4,6,7,10],mean:[4,6,7,11,13,15,16],median:[4,7,13,15,16,17],merg:11,messag:[6,13],meta:4,method:[4,7,11,15,16,18],metric:[11,17],metric_col:5,metric_geo:4,metric_horizon_barplot:5,metric_nam:[4,11],metric_per_btmod:4,metric_per_horizon:4,metric_valu:11,might:[5,11],mimick:[15,16,17],min:17,min_train_len:11,minim:11,minimum:11,minmax_scal:17,mix:17,mod:5,mod_auto_ridg:17,mode:7,model:[2,3,4,5,6,8,9,10,12,14,17],model_1:11,model_col:5,model_nam:[6,9],model_param_nam:6,modelexcept:3,modul:[0,2,15,16],month:4,more:[7,11,15,16,17],most:11,move:11,mse:11,mse_naiv:11,mu_j:15,mu_t:[12,15],multipl:[11,12,15,16,18],multipli:12,multiprocess:6,must:7,n_bin:5,n_bootstrap_draw:[7,14,17],n_eff:[12,13,15,16,17],n_split:11,naive_error:11,name:[4,5,6,7,11],natur:[15,16],need:[5,11,14],neg:[15,16,17],neget:17,nicer:17,non:[7,9,15],none:[5,6,7,9,11],normal:[15,17],note:[6,11,14,15,16],notebook:[11,15,16,17],notic:17,now:[11,14],nowcast:[15,17],nr_beta:4,num_of_regressor:17,num_particl:6,num_period:15,num_sampl:[6,14,17],num_step:[6,14],num_warmup:[6,17],number:[5,6,7,15,16,17],numpi:[11,12,13,14,15,16,17,18],object:[3,4,5,6,7,8,11,13,15,16,17],obs_sigma:4,observ:[11,17],obtain:[15,16,17],occur:[7,15,16],off:5,often:[4,11],onc:11,one:[14,17],onli:[7,11,14,15,17],optim:6,option:[4,5,15],orang:17,orbit:[1,2,10,12,13,15,16,18],order:[9,15,16,17,18],ordereddict:6,org:[11,12,13,18],origin:[7,11,14],original_dict:9,orign:11,other:[4,11],otherwis:9,our:[11,14],out:12,output:[4,6,11],over:[6,12,13],overestim:17,own:[7,11],p500:17,packag:[2,14,15,16],page:0,pair:[5,6],pair_typ:[5,13],palett:[2,3,17],panda:[11,12,13,14,15,16,17],paper:[15,16,17],parallel:[6,14],param:[5,9,11],param_grid:11,paramet:[4,5,6,7,9,11,12,13,15,16,17],parameter:6,paramt:[11,13],parent:[7,9],part:11,particl:6,particular:7,pass:[5,6,7,9,11],path:[5,9,13],penalti:7,per:6,percentil:[5,7,15,16],perform:[7,11,15,16,17],period:[7,11,17],pip:1,pkl:9,plot:[2,3,11,14,15,16,17,18],plot_compon:5,plot_posterior_param:[5,13],plot_predicted_compon:[5,12,14,15,16,17],plot_predicted_data:[5,12,14,15,16,17],plotlabel:4,plt:[5,11,13,17,18],png:13,point:11,portion:11,posit:17,possibl:11,posterior:[4,5,6,7,15,16],posteriori:[7,15,16],postq:4,pr_beta:4,practic:[13,17],pre:5,pred:4,pred_col:5,pred_horizon:[4,5],pred_horizon_col:5,pred_percentiles_col:5,predct:12,predict:[4,5,7,10,15,16,17],predicted_df:[5,11,12,14,15,16,17],predicted_df_dlt_log:15,predicted_df_dlt_logit:15,predicted_df_reg:17,predicted_df_reg_adjust:17,predicted_respons:4,predictedcompon:[4,5],predictibon:16,prediction_5:[15,16],prediction_95:[15,16],prediction_:5,prediction_percentil:[5,7,12],predictioncolumnnam:4,predictionexcept:3,predictmethod:[4,7],predictor:11,preprocess:17,present:[15,16,17],previou:7,print:[6,11,18],prior:[7,15,17],probabilist:14,process:[5,6,13,14,15,18],program:[11,12,13,14],project:15,provid:[5,7,11,18],purpos:[11,15,17],put:7,pylab:17,pypi:1,pyplot:[5,11,13,17,18],pyro:[2,3,4,6,10],pyro_estim:[2,3,14],pyroestim:6,pyroestimatormap:[6,14],pyroestimatorvi:[6,14],pystan:[6,11,12,13,15,16,17],python:13,pytorch:14,qualitativepalett:[4,17],queri:[15,16,17],quick:10,r_t:[12,15],rainbow8:4,random:[6,17],rang:[15,17],rate:6,rcparam:[17,18],readi:11,real:17,realiz:17,realli:11,reason:17,red:17,reduc:[7,15,16,17],redund:11,refer:18,refit:11,reg:[5,13,18],reg_bas:17,regress:[4,5,7,10,12,15],regression_coeffici:4,regression_negative_coeffici:4,regression_penalti:[7,17],regression_positive_coeffici:4,regression_regular_coeffici:4,regressionpenalti:4,regressionsamplingparamet:4,regressor:[4,7,11,12,13,15],regressor_1:17,regressor_2:17,regressor_3:17,regressor_4:17,regressor_5:17,regressor_:17,regressor_beta_prior:[7,17],regressor_col:[7,11,12,13,17],regressor_column:4,regressor_sigma_prior:[7,17],regressor_sign:[7,11,13,17],regular:[11,17],relat:[4,13,15,16,17],relationship:[13,17],remov:[16,17],renam:11,repetit:9,report:7,repres:[5,13],request:[11,12,13],requir:[1,5,6,11],reserv:[11,12,13,15,16,17],reset_index:17,residual_degree_of_freedom:4,residual_sigma:4,resolv:13,respect:17,respons:[5,12,15,16,17],response_col:[11,12,13,14,15,16,17],response_column:4,rest:12,restrict:17,result:[4,7,11,12,14,15,16,17],retriev:[11,12,13,17],return_decomposed_compon:4,rhat:[12,13,15,16,17],rho_:15,rho_b:15,rho_l:15,ridg:17,ridge_scal:17,right:6,right_on:11,rmsse:11,roll_splitt:11,root:14,row:11,rr_beta:4,run:[12,13,15,16,17],rw_loc:18,rw_scale:18,s_t:[12,15],same:[7,12,17],sampl:[4,5,6,7,12,13,14,15,16,17],sample_to_predict:4,sampler:6,save:[5,9,13],scalabl:14,scale:[17,18],scatter:[5,13],scheme:11,scipi:13,scott:[15,16,17],sea_sm:4,seaborn:13,search:[0,11],seasaonl:13,season:[4,5,7,11,12,13,14,15,16,17],seasonality_level:4,seasonality_sm_input:11,seasonality_smoothing_factor:4,seasonalitysamplingparamet:4,seasonl:[12,17],section:[11,12],see:[6,11,12,13,17],seed:[6,12,14,15,16,17,18],separ:[11,12,13],seper:12,seri:[11,12,13,15,16,17,18],serv:15,set:[4,7,11,12,13,15,17,18],set_index:[11,12,13],set_opt:14,set_titl:17,setup:17,shape:7,share:[6,7],should:[5,7,9,17],show:[5,11,12,13,15,16],shown:[11,12],sigma:7,sigma_:[15,17],sigma_j:15,sim:[15,17],similar:[7,11,14],similari:12,simpl:9,simul:[10,15],sinc:[5,11,13,15],sine:18,singl:[7,11,15,16],size:[5,17],skip:[12,13,15,16,17],sklearn:[16,17,18],slgt:4,slgtmodel:4,slice:11,slope:7,slope_sm_input:7,slope_smoothing_factor:4,slp_sm:4,smaller:7,smape:[5,11,17],smooth:[5,11,12],some:[4,7,11,17],sometim:11,sp500:[11,13,15,16,17],space:11,specif:11,specifi:[7,13,14,15,16],specifii:17,split:17,split_kei:11,splite:13,splitter:11,squar:11,stabl:[6,18],stack:4,stan:[2,3,4,6,14,17],stan_estim:[2,3,7],stan_input:4,stan_map_arg:6,stan_mcmc_arg:6,stan_mcmc_control:[6,17],stan_model_nam:9,stan_vi_arg:6,stand:[15,16],standalon:11,stanestim:6,stanestimatormap:6,stanestimatormcmc:[6,7],stanestimatorvi:6,stanmodelkei:4,start:[10,11,17],start_dat:4,starting_d:4,statsmodel:18,step:[6,11],stlouisf:[11,12,13],store:[5,11,13],str:[5,6,9],string:[5,6,13],structur:[15,16,17],style:[11,13,17,18],subclass:7,submodul:2,subpackag:2,subplot:[11,12,13,17],supplement:6,suppli:17,support:[7,11,14],svi:[6,14],sys:[14,15,16,17],tab:17,tabl:4,tail:[15,16],take:[11,14],task:11,tell:9,term:[15,16,17],test:[4,5,11,12,13,17],test_actu:11,test_actual_df:[5,14,15,16,17],test_df:[11,12,13,14,15,16,17],test_idx:4,test_predict:11,test_siz:[13,14,15,16,17],text:17,than:[11,16,17],thei:[15,17],them:[5,12,17],therefor:11,theta:15,thi:[5,6,7,11,12,13,15,16,17],thing:12,those:[13,17],three:[11,12,13,15,16],through:[5,11,15,16,17],thu:11,time:[11,12,14,15,16,17,18],time_delta:7,timedelta:15,timeseri:11,timeseriessplitschemenam:4,titl:[5,15,16,17],to_pydatetim:15,togeth:[5,12],too:5,tool:[12,13],top:3,total:[6,12,14,15,16,17],trace:5,trace_elbo:6,traditio:12,train:[4,5,11,12,13],train_actu:11,train_df:[11,12,13,14,15,16,17],train_end_d:4,train_idx:4,train_mean:11,train_start_d:4,training_actual_df:[5,12,14,15,16,17],training_actual_respons:4,training_data:11,transform:[4,7,15,16,17],transorform:12,trend:[4,5,7,11,12,13,16,17],truth:17,ts_splitter:11,tsa:18,tune:[11,17],tuned_df:11,tupl:5,tutori:[0,12,13],two:[5,11,17],txt:1,type:[5,6,9,15,16],uTS:4,uber:[1,14,15,16],under:11,underli:14,understand:12,unemploi:[11,12,13,15,16,17],unemploy:[11,12,13,15,16,17],unittest:5,updat:15,update_dict:9,upgrad:13,upper:5,upstream:4,use:[7,11,12,13,14,15,16,17,18],used:[4,5,6,7,11,12,13],useful:[11,13,17],user:[5,11,14,15,16,17],uses:[5,11],using:[7,11,15,16,17,18],util:[2,3,11,12,13,14,15,16,17,18],vairabl:12,valid:11,valu:[4,5,6,7,11,12,15,16,17],variabl:4,varian:[15,16,17],variat:[12,14],variational_infer:4,verbos:[6,11],veri:[13,17],via:17,visual:[4,10,11,12],vix:[11,13,15,16,17],viz:5,wai:[11,17],wall:[14,15,16,17],want:[5,11,13,15,17],warn:[11,12,13,15,16,17],wave:18,week:[4,11,12,13,14,15,16,17],weekli:[11,12,13,15,16,17,18],weight:7,well:[5,15,17],when:[11,13,15,17],where:[5,11,12,15,18],whether:[5,9,11],which:[5,6,11,13,15,16],who:15,wide:11,wihtin:18,window_typ:11,windown:11,wish:11,within:[4,11,12],without:15,wmape:11,work:12,wrapper:15,www:18,y_t:15,year:[12,15],yearli:12,yellow:11,you:[11,13],your:11,yyyi:4},titles:["Welcome to Orbit\u2019s Documentation!","Installation","API Docs","orbit package","orbit.constants package","orbit.diagnostics package","orbit.estimators package","orbit.models package","orbit.pyro package","orbit.utils package","Tutorials","Backtest Orbit Model","Decompose Prediction","MCMC Model Visual Diagnostics","Pyro in Orbit","DLT Quick Start","LGT Quick Start","Regression with Orbit","Simulation Data"],titleterms:{Use:17,With:17,adjust:17,api:2,arma:18,backtest:11,base_estim:6,base_model:7,beta:17,claim:[11,12,13],coeffici:17,compon:12,constant:4,content:[3,4,5,6,7,8,9],creat:11,data:[11,12,13,14,15,16,17,18],dataset:17,decompos:12,densiti:13,deviat:17,diagnost:[5,13],discret:18,dlt:[4,7,15],dltaggreg:15,dltfull:15,dltmap:15,doc:2,document:0,driven:17,each:17,estim:[6,12],except:3,expand:11,fit:[11,13,14],flat:15,fourier:18,gener:[9,11],get:11,global:15,histogram:13,hyperparameter_tun:11,iclaim:17,indic:0,initi:[11,12,13],instal:1,lgt:[4,7,8,16],lgtaggreg:16,lgtfull:16,lgtmap:16,linear:15,log:15,logist:15,map:[12,14],mcmc:[12,13],model:[7,11,13,15,16],modul:[3,4,5,6,7,8,9],number:11,orbit:[0,3,4,5,6,7,8,9,11,14,17],packag:[3,4,5,6,7,8,9],pair:13,palett:4,piror:17,plot:[5,12,13],posterior:13,predict:[11,12,14],pyro:[8,9,14],pyro_estim:6,quick:[15,16],random:18,regress:[17,18],regressor:17,roll:11,score:11,season:18,sigma:17,sign:17,simul:[17,18],specifi:11,split:[11,15,16],stan:9,stan_estim:6,standard:17,start:[15,16],submodul:[3,4,5,6,7,8,9],subpackag:3,tabl:0,test:[15,16],timeseriessplitt:11,trace:13,train:[15,16],trend:[15,18],tutori:10,util:9,visual:13,viz:13,walk:18,welcom:0,window:11,without:17}})