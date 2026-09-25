const APK_NAME = "GlitchLauncher.apk";
const PARTS = ["apk/p0.txt", "apk/p1.txt", "apk/p2.txt", "apk/p3.txt", "apk/p4.txt"];
async function downloadApk() {
  try {
    const texts = await Promise.all(PARTS.map(function (u) {
      return fetch(u).then(function (r) {
        if (!r.ok) throw new Error("missing " + u);
        return r.text();
      });
    }));
    const b64 = texts.join("").replace(/\s/g, "");
    const bin = Uint8Array.from(atob(b64), function (c) { return c.charCodeAt(0); });
    const blob = new Blob([bin], { type: "application/vnd.android.package-archive" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = APK_NAME;
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (e) {
    alert("Download the APK from the GitHub repo chat file named GlitchLauncher.apk, then install it on your phone.");
  }
}
