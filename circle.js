var h=0;
var m=0;
var ss=0;
var hh=0;
var mm=0;
var sss=0;
function humanReadable(s) {
  for ( i=1; i<s; i++) {
  if (i%60 == 0) {
  m++;
   if (m%60 == 0) {
  h++;
  m=0;} }
  ss =+ s%60;}
  console.log(h,m,ss);
  if (h<10) {
  hh ="0" + h;}
  if (h>=10) {hh = h;}
  if (m<10) {
  mm ="0" +m;}
  if (m>=10) {mm = m;}
  if (ss<10) {
  sss="0"+ ss;}
 if (ss>=10) {sss = ss;}
  return hh + ":" + mm + ":" + sss;}
