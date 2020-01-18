var botName = "קייט בוט",
botAvatar = "https://micro.kayt-il.com/wp-content/uploads/2019/12/logo2.png",
conversationData = {"homepage": {1: { "statement": [ 
"היי שלום מך שלומך? אני הקייט בוט, אני מנהל את האתר שלנו", 
"יש לי כמה שאלות", 
"? מה שמך", 
], "input": {"name": "name", "consequence": 1.2}},1.2:{"statement": function(context) {return [ 
"! נעים להכיר, " + context.name  + "", 
".כפי שנראה, האתר שלנו יעלה וישוגר בקרוב", 
".אני יודע, זה מלהיב לראות את זה, אך נשארו לנו עוד כמה ימים לסיים", 
"? רוצה לראות אותו לפני כולם", 
];},"options": [{ "choice": "מעניין","consequence": 1.4},{ 
"choice": "משעמם","consequence": 1.5}]},1.4: { "statement": [ 
".מגניב! יש להשאיר כתובת מייל כאן ואנחנו נוכל לעדכן אותך בהקדם", 
], "email": {"email": "email", "consequence": 1.6}},1.5: {"statement": function(context) {return [ 
"מצטער לשמוע, " + context.name  + " :( נתראה בהזדמנות אחרת", 
];}},1.6: { "statement": [ 
"!יש נרשם! תודה רבה נתראה בקרוב", 
"!שיהיה לך יום מצויין", 
]}}};