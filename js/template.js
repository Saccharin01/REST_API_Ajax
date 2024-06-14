const htmlTemplate = (content="") => {
  return`<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<div id="root">
${content}
</div>
<script type = "module" src="script.js"></script>
</body>
</html>`;
}

module.exports = htmlTemplate