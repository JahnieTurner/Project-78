var images = [
  "https://i.dailymail.co.uk/i/pix/2015/11/25/22/2ED01C0B00000578-0-image-a-8_1448489850173.jpg"
"https://i.dailymail.co.uk/i/pix/2016/12/02/16/3AF68E2600000578-0-image-m-44_1480695280780.jpg"
"https://www.tvshowsace.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-18-at-9.25.15-PM.png"
"https://i1.wp.com/slouchingtowardsthatcham.com/wp-content/uploads/2018/05/IMG_8506.jpg?fit=1024%2C1024&ssl=1"
"https://i.pinimg.com/originals/88/54/6b/88546ba1268bf41fd360e08eb52f91d5.jpg"
];
var names = ["Nina Turner", "Rauhn Turner", "Jahnie Turner", "Jessie Turner", "Joie Turner"];
var i = 0;
function nextslide() {
  document.getElementById("Family").src = images[i];
  document.getElementById("names").innerHTML = names[i];
  i++;
  if (i == 5) {
    i = 0;
  }

}
