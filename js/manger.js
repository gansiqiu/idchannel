var g_object_name = "";
var key = '';
var hostPrefix = "http://sdx-kt.oss-cn-shanghai.aliyuncs.com/";

var uploadImage = "resources/backend/images/app/defaultPeopleImage.jpg";
function random_string(len) {
    var len = len || 32;
    var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = chars.length;
    var pwd = '';
    for (var i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}
function get_suffix(filename) {
    var pos = filename.lastIndexOf('.')
    var suffix = ''
    if (pos != -1) {
        suffix = filename.substring(pos)
    }
    return suffix;
}
function calculate_object_name(filename) {

    var suffix = get_suffix(filename)
    g_object_name = key + random_string(10) + suffix

}
function get_uploaded_object_name(filename) {
    return g_object_name;
}

var vm = new Vue({
	el:"#manger",
	data(){
		return{
			
		}
	},
	methods:{
		
	}
})