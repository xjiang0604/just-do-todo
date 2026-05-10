# Just Do

> 寰蒋 To Do 椋庢牸璺ㄨ澶囧緟鍔炲簲鐢?
![Just Do](https://img.shields.io/badge/version-1.0.0-blue)
![Platform](https://img.shields.io/badge/platform-Web%20%7C%20Mobile-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)

## 馃搵 鍔熻兘鐗圭偣

- 鉁?**寰蒋 To Do 椋庢牸 UI** - 鐔熸倝鐨勫乏渚ф爮 + 浠诲姟鍖哄竷灞€
- 馃攧 **鐪熸鐨勮法璁惧鍚屾** - 鏁版嵁瀛樺偍鍦ㄨ吘璁枃妗ｏ紝浠绘剰璁惧璁块棶
- 馃摫 **PWA 鏀寔** - 鍙畨瑁呭埌鎵嬫満/鐢佃剳妗岄潰锛岀绾垮彲鐢?- 猸?**鏅鸿兘娓呭崟** - 鎴戠殑涓€澶┿€侀噸瑕併€佸凡璁″垝绛夊唴缃鍥?- 馃帹 **鑷畾涔夋竻鍗?* - 鍒涘缓褰╄壊鍒嗙被娓呭崟
- 鈴?**鏃ユ湡鎻愰啋** - 璁剧疆鎴鏃ユ湡鍜屾椂闂?- 馃摛馃摜 **瀵煎叆瀵煎嚭** - 鏁版嵁澶囦唤涓庤縼绉?- 馃寵 **鏋佺畝璁捐** - 涓撴敞浠诲姟鏈韩锛屾棤骞叉壈

## 馃殌 蹇€熷紑濮?
### 鏈湴杩愯

```bash
# 鍏嬮殕浠撳簱
git clone https://github.com/xjiang0604/just-do-todo.git

# 杩涘叆鐩綍
cd just-do-todo

# 浣跨敤浠绘剰 HTTP 鏈嶅姟鍣ㄨ繍琛?# Python 3
python -m http.server 8080

# Node.js
npx serve

# 鎴栫洿鎺ョ敤娴忚鍣ㄦ墦寮€ index.html锛堥儴鍒嗗姛鑳藉彈闄愶級
```

### 璁块棶鍦板潃

- **鏈湴寮€鍙?*: http://localhost:8080
- **绾夸笂閮ㄧ讲**: https://xjiang0604.github.io/just-do-todo

## 馃敡 閰嶇疆鑵捐鏂囨。鍚屾

### 鑾峰彇鑵捐鏂囨。閾炬帴

1. 鎵撳紑 [鑵捐鏂囨。](https://docs.qq.com/)
2. 鍒涘缓鏂扮殑銆屽湪绾胯〃鏍笺€?3. 鐐瑰嚮鍙充笂瑙掋€屽垎浜€?4. 澶嶅埗鏂囨。閾炬帴
5. 灏嗛摼鎺ラ厤缃埌 `js/config.js` 涓?
### 鏁版嵁鏍煎紡

| 鍒楀悕 | 绫诲瀷 | 璇存槑 |
|------|------|------|
| id | 鏂囨湰 | 鍞竴鏍囪瘑绗?|
| title | 鏂囨湰 | 浠诲姟鏍囬 |
| completed | 鏄?鍚?| 鏄惁瀹屾垚 |
| dueDate | 鏃ユ湡 | 鎴鏃ユ湡 |
| dueTime | 鏂囨湰 | 鎴鏃堕棿 |
| priority | 鏂囨湰 | 浼樺厛绾?(none/low/medium/high) |
| list | 鏂囨湰 | 鎵€灞炴竻鍗?ID |
| isMyDay | 鏄?鍚?| 鏄惁鍦?鎴戠殑涓€澶? |
| isImportant | 鏄?鍚?| 鏄惁閲嶈 |
| createdAt | 鏂囨湰 | 鍒涘缓鏃堕棿 |

## 馃搧 椤圭洰缁撴瀯

```
just-do-todo/
鈹溾攢鈹€ index.html          # 涓婚〉闈?鈹溾攢鈹€ css/
鈹?  鈹斺攢鈹€ style.css       # 鏍峰紡鏂囦欢锛堝彲閫夛級
鈹溾攢鈹€ js/
鈹?  鈹斺攢鈹€ app.js          # 搴旂敤閫昏緫锛堝彲閫夛級
鈹溾攢鈹€ manifest.json       # PWA 娓呭崟
鈹溾攢鈹€ sw.js               # Service Worker
鈹溾攢鈹€ README.md           # 椤圭洰璇存槑
鈹斺攢鈹€ LICENSE             # MIT 璁稿彲璇?```

## 馃洜锔?鎶€鏈爤

- **鍓嶇**: HTML5 + CSS3 + Vanilla JavaScript锛堥浂渚濊禆锛?- **鏁版嵁瀛樺偍**: 鑵捐鏂囨。鍦ㄧ嚎琛ㄦ牸
- **閮ㄧ讲**: GitHub Pages
- **PWA**: Service Worker + Web App Manifest

## 馃摫 鎴浘棰勮

### 妗岄潰绔?- 宸︿晶鏍忥細瀵艰埅 + 娓呭崟鍒楄〃
- 鍙充晶鍖猴細浠诲姟鍒楄〃 + 鎿嶄綔鎸夐挳

### 绉诲姩绔?- 鍝嶅簲寮忓竷灞€
- 瑙︽懜浼樺寲
- 鍙坊鍔犲埌涓诲睆骞?
## 馃 璐＄尞

娆㈣繋鎻愪氦 Issue 鍜?Pull Request锛?
## 馃搫 璁稿彲璇?
MIT License - 璇﹁ [LICENSE](LICENSE)

---

Made with 鉂わ笍 by WorkBuddy
