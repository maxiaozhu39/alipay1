auto.waitFor();
launchApp("抖音短视频");
while (true) {
    logout();
}
function logout() {
    waitForActivity("com.ss.android.ugc.aweme.main.MainActivity");
    clicks(boundsInside(0, device.height - 300, device.width, device.height).text("我").findOne());
    sleep(1000);
    clicks(id("awe").findOne());
    clicks(text("设置").findOne());
    scrollDown();
    clicks(text("退出登录").findOne());
    clicks(text("确定").findOne());
    clicks(id("a1w").findOne());
}
function clicks(obj) {
    if (obj == null) {
        alert("脚本错误" + obj + "为null");
        exit();
    }
    while (obj.clickable() == false) {
        obj = obj.parent();
    }
    while (!obj.click());
    sleep(1000);
}