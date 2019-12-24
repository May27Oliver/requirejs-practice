require.config({
	baseUrl:'./', //設定啟始路徑
	paths:{//設定plugin路徑
		//jQuery
		"jQuery":"plugins/jQuery/jquery.min",
		//jQuery-ui
        "jQuery-ui":"plugins/jQueryUi/jquery-ui.min",
        "moment":"plugins/moment/moment"
	},
	shim:{//設定plugin相依性
	//jQuery-ui
	"jQuery-ui":["jQuery"]
	},
	deps:['js/app.js'] //設定啟始js的位置，config執行完接著執行app.js
});