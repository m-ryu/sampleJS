<!--

// エラーメッセージ出力
var errMsg = "金利の表示ができませんでした。お手数ですが入力欄に入力をお願いします。";
function dispErrMsg() {
	$('.errMsgKinriModal').text(errMsg);
	$('.errMsgKinriModal').css('margin-bottom', '30px');
}
​
jQuery(document).ready(function($){
​
	let apiData;
	$.ajax({
		url:'/wpl/NBGate/',
		type:'POST',
		headers: {
			'WPL-Request-Source': 'SPA'
		},
		data: {_ControlID: "i080102CT", _PageID: "NoPageID", _ActionID: "NoActionID"},
		dataType: "json"
	})
	// Ajaxリクエストが成功した時
	.done(function(json) {
		if (json.dsb == null || json.dsb == undefined) {
			dispErrMsg();
			return;
		}
		if (json.dsb.w0801m20 == null || json.dsb.w0801m20 == undefined) {
			dispErrMsg();
			return;
		}
		apiData = json.dsb.w0801m20[0];
		parseAndSet(apiData);
	})
	// Ajaxリクエストが失敗した時
	.fail(function(json) {
		dispErrMsg();
		return;
	});​
});
​
-->
