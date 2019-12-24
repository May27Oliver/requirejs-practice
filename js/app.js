define(['moment','jQuery-ui'],//你要使用的plugin
	//plugin分兩種
	//一種像是jQuery會自動幫你生成全域變數$
	//一種像是moment需要一個變數來接
	function (moment){
        $("#insertStartDate").datepicker();
		$("#insertEndDate").datepicker();

		document.getElementById("check").onclick=function(){
			var startDate=document.getElementById("insertStartDate").value;
			var endDate=document.getElementById("insertEndDate").value; //datepicker的值要用value取得
			var start = moment(startDate);
			var end = moment(endDate);
			console.log(start.isValid());
			console.log(end.isValid());
			if(start.isValid()===true && end.isValid()===true){
				document.getElementById("feedback").innerText="輸入日期有效~~";
			}else{
				document.getElementById("feedback").innerText="輸入日期無效~~";
			}
		}
    }
);