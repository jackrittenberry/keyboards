KeymanWeb.KR(new Keyboard_bj_oji_cree());
function Keyboard_bj_oji_cree()
{
  this.KI="Keyboard_bj_oji_cree";
  this.KN="BJ-OjiCree (Kingfisher)";
  this.KV={F:' 1em "Arial "',K102:0,BK:new Array("","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","")};this.KDU=1;
  this.KH='';
  this.KM=0;
  this.KBVER="9.0.1";
  this.s_ConsKey="ptkcmnsÎyfÿ";
  this.s_CapConsKey="PTKCMNSÎYFÿ";
  this.s_Ce="ᐯᑌᑫᒉᒣᓀᓭᔐᔦᕓᖧ";
  this.s_Ci="ᐱᑎᑭᒋᒥᓂᓯᔑᔨᕕᖨ";
  this.s_Cii="ᐲᑏᑮᒌᒦᓃᓰᔒᔩᕖᖩ";
  this.s_Cu="ᐳᑐᑯᒍᒧᓄᓱᔓᔪᕗᖪ";
  this.s_Cuu="ᐴᑑᑰᒎᒨᓅᓲᔔᔫᕘᖫ";
  this.s_Co="ᐳᑐᑯᒍᒧᓄᓱᔓᔪᕗᖪ";
  this.s_Coo="ᐴᑑᑰᒎᒨᓅᓲᔔᔫᕘᖫ";
  this.s_Ca="ᐸᑕᑲᒐᒪᓇᓴᔕᔭᕙᖬ";
  this.s_Caa="ᐹᑖᑳᒑᒫᓈᓵᔖᔮᕚᖭ";
  this.s_CC="ᑊᐟᐠᐨᒼᐣᐢᓑᔾᕝᖮ";
  this.s_VowelKey="eiuoa";
  this.s_CapVowelKey="EIUOA";
  this.s_VV="ᐁᐃᐅᐅᐊᐄᐆᐋ";
  this.s_Hkey="h";
  this.s_CapHkey="H";
  this.s_WKey="wW";
  this.KVER="10.0.910.0";
  this.gs=function(t,e) {
    return this.g_Main(t,e);
  };
  this.g_Main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e,16384,189)) {   // Line 181
      r=m=1;
      k.KO(0,t," ");
    }
    else if(k.KKM(e,16384,190)) {   // Line 176
      r=m=1;
      k.KO(0,t,".");
    }
    else if(k.KKM(e,16400,188)&&k.KCM(1,t,"‘",1)) {   // Line 188
      r=m=1;
      k.KO(1,t,"“");
    }
    else if(k.KKM(e,16400,188)) {   // Line 186
      r=m=1;
      k.KO(0,t,"‘");
    }
    else if(k.KKM(e,16384,187)) {   // Line 179
      r=m=1;
      k.KO(0,t,"  ");
    }
    else if(k.KKM(e,16400,190)&&k.KCM(1,t,"’",1)) {   // Line 189
      r=m=1;
      k.KO(1,t,"”");
    }
    else if(k.KKM(e,16400,190)) {   // Line 187
      r=m=1;
      k.KO(0,t,"’");
    }
    else if(k.KKM(e,16400,65)) {   // Line 165
      r=m=1;
      k.KO(0,t,"ᐊ");
    }
    else if(k.KKM(e,16400,67)) {   // Line 149
      r=m=1;
      k.KO(0,t,"ᐨ");
    }
    else if(k.KKM(e,16400,69)) {   // Line 165
      r=m=1;
      k.KO(0,t,"ᐁ");
    }
    else if(k.KKM(e,16400,70)) {   // Line 149
      r=m=1;
      k.KO(0,t,"ᕝ");
    }
    else if(k.KKM(e,16400,72)&&k.KCM(1,t,"ᐢ",1)) {   // Line 128
      r=m=1;
      k.KO(1,t,"ᐢᐦ");
    }
    else if(k.KKM(e,16400,72)&&k.KCM(1,t,"ᐟ",1)) {   // Line 130
      r=m=1;
      k.KO(1,t,"ᐟᐦ");
    }
    else if(k.KKM(e,16400,72)&&k.KCM(1,t,"ᐨ",1)) {   // Line 132
      r=m=1;
      k.KO(1,t,"ᐨᐦ");
    }
    else if(k.KKM(e,16400,72)) {   // Line 134
      r=m=1;
      k.KO(0,t,"ᐦ");
    }
    else if(k.KKM(e,16400,73)) {   // Line 165
      r=m=1;
      k.KO(0,t,"ᐃ");
    }
    else if(k.KKM(e,16400,75)) {   // Line 149
      r=m=1;
      k.KO(0,t,"ᐠ");
    }
    else if(k.KKM(e,16400,77)) {   // Line 149
      r=m=1;
      k.KO(0,t,"ᒼ");
    }
    else if(k.KKM(e,16400,78)) {   // Line 149
      r=m=1;
      k.KO(0,t,"ᐣ");
    }
    else if(k.KKM(e,16400,79)) {   // Line 165
      r=m=1;
      k.KO(0,t,"ᐅ");
    }
    else if(k.KKM(e,16400,80)) {   // Line 149
      r=m=1;
      k.KO(0,t,"ᑊ");
    }
    else if(k.KKM(e,16400,83)) {   // Line 149
      r=m=1;
      k.KO(0,t,"ᐢ");
    }
    else if(k.KKM(e,16400,84)) {   // Line 149
      r=m=1;
      k.KO(0,t,"ᐟ");
    }
    else if(k.KKM(e,16400,85)) {   // Line 165
      r=m=1;
      k.KO(0,t,"ᐅ");
    }
    else if(k.KKM(e,16400,87)&&k.KCM(1,t,"ᕽ",1)) {   // Line 145
      r=m=1;
      k.KO(1,t,"ᐦᒄ");
    }
    else if(k.KKM(e,16400,87)&&k.KCM(1,t,"ᐠ",1)) {   // Line 171
      r=m=1;
      k.KO(1,t,"ᒄ");
    }
    else if(k.KKM(e,16400,87)&&k.KCM(1,t,"ᒼ",1)) {   // Line 172
      r=m=1;
      k.KO(1,t,"ᒽ");
    }
    else if(k.KKM(e,16400,87)) {   // Line 173
      r=m=1;
      k.KO(0,t,"ᐤ");
    }
    else if(k.KKM(e,16400,89)) {   // Line 149
      r=m=1;
      k.KO(0,t,"ᔾ");
    }
    else if(k.KKM(e,16400,189)&&k.KCM(1,t," ",1)) {   // Line 184
      r=m=1;
      k.KO(1,t," ");
    }
    else if(k.KKM(e,16400,189)) {   // Line 183
      r=m=1;
      k.KO(0,t," ");
    }
    else if(k.KKM(e,16384,65)&&k.KCM(1,t,"ᕽ",1)) {   // Line 143
      r=m=1;
      k.KO(1,t,"ᐦᑲ");
    }
    else if(k.KKM(e,16384,65)) {   // Line 164
      r=m=1;
      k.KO(0,t,"ᐊ");
    }
    else if(k.KKM(e,16384,66)) {   // Line 153
      r=m=1;
      k.KO(0,t,"ᑊ");
    }
    else if(k.KKM(e,16384,67)) {   // Line 148
      r=m=1;
      k.KO(0,t,"ᐨ");
    }
    else if(k.KKM(e,16384,68)) {   // Line 154
      r=m=1;
      k.KO(0,t,"ᐟ");
    }
    else if(k.KKM(e,16384,69)&&k.KCM(1,t,"ᕽ",1)) {   // Line 139
      r=m=1;
      k.KO(1,t,"ᐦᑫ");
    }
    else if(k.KKM(e,16384,69)) {   // Line 164
      r=m=1;
      k.KO(0,t,"ᐁ");
    }
    else if(k.KKM(e,16384,70)) {   // Line 148
      r=m=1;
      k.KO(0,t,"ᕝ");
    }
    else if(k.KKM(e,16384,71)) {   // Line 155
      r=m=1;
      k.KO(0,t,"ᐠ");
    }
    else if(k.KKM(e,16384,72)&&k.KCM(1,t,"ᐢ",1)) {   // Line 127
      r=m=1;
      k.KO(1,t,"ᓑ");
    }
    else if(k.KKM(e,16384,72)&&k.KCM(1,t,"ᐟ",1)) {   // Line 129
      r=m=1;
      k.KO(1,t,"ᖮ");
    }
    else if(k.KKM(e,16384,72)&&k.KCM(1,t,"ᐨ",1)) {   // Line 131
      r=m=1;
      k.KO(1,t,"ᐨ");
    }
    else if(k.KKM(e,16384,72)) {   // Line 133
      r=m=1;
      k.KO(0,t,"ᐦ");
    }
    else if(k.KKM(e,16384,73)&&k.KCM(1,t,"ᕽ",1)) {   // Line 140
      r=m=1;
      k.KO(1,t,"ᐦᑭ");
    }
    else if(k.KKM(e,16384,73)) {   // Line 164
      r=m=1;
      k.KO(0,t,"ᐃ");
    }
    else if(k.KKM(e,16384,74)) {   // Line 156
      r=m=1;
      k.KO(0,t,"ᐨ");
    }
    else if(k.KKM(e,16384,75)&&k.KCM(1,t,"ᐦ",1)) {   // Line 137
      r=m=1;
      k.KO(1,t,"ᕽ");
    }
    else if(k.KKM(e,16384,75)) {   // Line 148
      r=m=1;
      k.KO(0,t,"ᐠ");
    }
    else if(k.KKM(e,16384,76)) {   // Line 160
      r=m=1;
      k.KO(0,t,"ᓬ");
    }
    else if(k.KKM(e,16384,77)) {   // Line 148
      r=m=1;
      k.KO(0,t,"ᒼ");
    }
    else if(k.KKM(e,16384,78)) {   // Line 148
      r=m=1;
      k.KO(0,t,"ᐣ");
    }
    else if(k.KKM(e,16384,79)&&k.KCM(1,t,"ᕽ",1)) {   // Line 142
      r=m=1;
      k.KO(1,t,"ᐦᑯ");
    }
    else if(k.KKM(e,16384,79)) {   // Line 164
      r=m=1;
      k.KO(0,t,"ᐅ");
    }
    else if(k.KKM(e,16384,80)) {   // Line 148
      r=m=1;
      k.KO(0,t,"ᑊ");
    }
    else if(k.KKM(e,16384,82)) {   // Line 161
      r=m=1;
      k.KO(0,t,"ᕒ");
    }
    else if(k.KKM(e,16384,83)) {   // Line 148
      r=m=1;
      k.KO(0,t,"ᐢ");
    }
    else if(k.KKM(e,16384,84)) {   // Line 148
      r=m=1;
      k.KO(0,t,"ᐟ");
    }
    else if(k.KKM(e,16384,85)&&k.KCM(1,t,"ᕽ",1)) {   // Line 141
      r=m=1;
      k.KO(1,t,"ᐦᑯ");
    }
    else if(k.KKM(e,16384,85)) {   // Line 164
      r=m=1;
      k.KO(0,t,"ᐅ");
    }
    else if(k.KKM(e,16384,86)) {   // Line 157
      r=m=1;
      k.KO(0,t,"ᕝ");
    }
    else if(k.KKM(e,16384,87)&&k.KCM(1,t,"ᕽ",1)) {   // Line 145
      r=m=1;
      k.KO(1,t,"ᐦᒄ");
    }
    else if(k.KKM(e,16384,87)&&k.KCM(1,t,"ᐠ",1)) {   // Line 171
      r=m=1;
      k.KO(1,t,"ᒄ");
    }
    else if(k.KKM(e,16384,87)&&k.KCM(1,t,"ᒼ",1)) {   // Line 172
      r=m=1;
      k.KO(1,t,"ᒽ");
    }
    else if(k.KKM(e,16384,87)) {   // Line 173
      r=m=1;
      k.KO(0,t,"ᐤ");
    }
    else if(k.KKM(e,16384,89)) {   // Line 148
      r=m=1;
      k.KO(0,t,"ᔾ");
    }
    else if(k.KKM(e,16384,90)) {   // Line 158
      r=m=1;
      k.KO(0,t,"ᐢ");
    }
    else if(k.KKM(e,16384,0)) {   // Line 148
      r=m=1;
      k.KO(0,t,"ᓑ");
    }
    else if(k.KKM(e,16384,0)) {   // Line 149
      r=m=1;
      k.KO(0,t,"ᓑ");
    }
    else if(k.KKM(e,16400,32)) {   // Line 148
      r=m=1;
      k.KO(0,t,"ᖮ");
    }
    else if(k.KKM(e,16400,32)) {   // Line 149
      r=m=1;
      k.KO(0,t,"ᖮ");
    }
    if(m) {
    
      r=this.g_MakeSyllables(t,e);
    }
    return r;
  };
  this.g_MakeSyllables=function(t,e) {
    var k=KeymanWeb,r=1,m=0;
    if(k.KCM(5,t,"ᐨᕒᐃᐢᐟ",5)) {   // Line 282
      m=1;
      k.KO(5,t,"᙭");
    }
    else if(k.KA(0,k.KC(3,1,t),this.s_CC)&&k.KCM(2,t,"ᐧ",1)&&k.KA(2,k.KC(1,1,t),this.s_VV)) {   // Line 227
      m=1;
      k.KIO(3,this.s_CC,1,t);
      k.KIO(-1,this.s_VV,3,t);
      k.KO(-1,t,"ᐧ");
    }
    else if(k.KA(0,k.KC(3,1,t),this.s_CC)&&k.KCM(2,t,"ᐤᐁ",2)) {   // Line 243
      m=1;
      k.KIO(3,this.s_Ce,1,t);
      k.KO(-1,t,"ᐧ");
    }
    else if(k.KA(0,k.KC(3,1,t),this.s_CC)&&k.KCM(2,t,"ᐤᐃ",2)) {   // Line 244
      m=1;
      k.KIO(3,this.s_Ci,1,t);
      k.KO(-1,t,"ᐧ");
    }
    else if(k.KA(0,k.KC(3,1,t),this.s_CC)&&k.KCM(2,t,"ᐧᐄ",2)) {   // Line 245
      m=1;
      k.KIO(3,this.s_Cii,1,t);
      k.KO(-1,t,"ᐧ");
      k.KDO(-1,t,0);
    }
    else if(k.KA(0,k.KC(3,1,t),this.s_CC)&&k.KCM(2,t,"ᐤᐅ",2)) {   // Line 246
      m=1;
      k.KIO(3,this.s_Cu,1,t);
      k.KO(-1,t,"ᐧ");
    }
    else if(k.KA(0,k.KC(3,1,t),this.s_CC)&&k.KCM(2,t,"ᐧᐆ",2)) {   // Line 247
      m=1;
      k.KIO(3,this.s_Cuu,1,t);
      k.KO(-1,t,"ᐧ");
      k.KDO(-1,t,0);
    }
    else if(k.KA(0,k.KC(3,1,t),this.s_CC)&&k.KCM(2,t,"ᐤᐅ",2)) {   // Line 248
      m=1;
      k.KIO(3,this.s_Co,1,t);
      k.KO(-1,t,"ᐧ");
    }
    else if(k.KA(0,k.KC(3,1,t),this.s_CC)&&k.KCM(2,t,"ᐧᐆ",2)) {   // Line 249
      m=1;
      k.KIO(3,this.s_Coo,1,t);
      k.KO(-1,t,"ᐧ");
      k.KDO(-1,t,0);
    }
    else if(k.KA(0,k.KC(3,1,t),this.s_CC)&&k.KCM(2,t,"ᐤᐊ",2)) {   // Line 250
      m=1;
      k.KIO(3,this.s_Ca,1,t);
      k.KO(-1,t,"ᐧ");
    }
    else if(k.KA(0,k.KC(3,1,t),this.s_CC)&&k.KCM(2,t,"ᐧᐋ",2)) {   // Line 251
      m=1;
      k.KIO(3,this.s_Caa,1,t);
      k.KO(-1,t,"ᐧ");
      k.KDO(-1,t,0);
    }
    else if(k.KA(0,k.KC(3,1,t),this.s_Ci)&&k.KCM(2,t,"ᐧᐃ",2)) {   // Line 263
      m=1;
      k.KIO(3,this.s_Cii,1,t);
      k.KO(-1,t,"ᐧ");
      k.KDO(-1,t,0);
    }
    else if(k.KA(0,k.KC(3,1,t),this.s_Cu)&&k.KCM(2,t,"ᐧᐅ",2)) {   // Line 264
      m=1;
      k.KIO(3,this.s_Cuu,1,t);
      k.KO(-1,t,"ᐧ");
      k.KDO(-1,t,0);
    }
    else if(k.KA(0,k.KC(3,1,t),this.s_Co)&&k.KCM(2,t,"ᐧᐅ",2)) {   // Line 265
      m=1;
      k.KIO(3,this.s_Coo,1,t);
      k.KO(-1,t,"ᐧ");
      k.KDO(-1,t,0);
    }
    else if(k.KA(0,k.KC(3,1,t),this.s_Ca)&&k.KCM(2,t,"ᐧᐊ",2)) {   // Line 266
      m=1;
      k.KIO(3,this.s_Caa,1,t);
      k.KO(-1,t,"ᐧ");
      k.KDO(-1,t,0);
    }
    else if(k.KCM(3,t,"ᐃᐧᐃ",3)) {   // Line 272
      m=1;
      k.KO(3,t,"ᐄᐧ");
      k.KDO(-1,t,0);
    }
    else if(k.KCM(3,t,"ᐅᐧᐅ",3)) {   // Line 274
      m=1;
      k.KO(3,t,"ᐆᐧ");
      k.KDO(-1,t,0);
    }
    else if(k.KCM(3,t,"ᐊᐧᐊ",3)) {   // Line 276
      m=1;
      k.KO(3,t,"ᐋᐧ");
      k.KDO(-1,t,0);
    }
    else if(k.KCM(2,t,"ᐠᐤ",2)) {   // Line 209
      m=1;
      k.KO(2,t,"ᒄ");
    }
    else if(k.KCM(2,t,"ᒼᐤ",2)) {   // Line 210
      m=1;
      k.KO(2,t,"ᒽ");
    }
    else if(k.KCM(2,t,"ᒄᐃ",2)) {   // Line 217
      m=1;
      k.KO(2,t,"ᑭᐧ");
    }
    else if(k.KCM(2,t,"ᒄᐊ",2)) {   // Line 218
      m=1;
      k.KO(2,t,"ᑲᐧ");
    }
    else if(k.KCM(2,t,"ᒄᐅ",2)) {   // Line 219
      m=1;
      k.KO(2,t,"ᑯᐧ");
    }
    else if(k.KCM(2,t,"ᒄᐁ",2)) {   // Line 220
      m=1;
      k.KO(2,t,"ᑫᐧ");
    }
    else if(k.KCM(2,t,"ᒽᐃ",2)) {   // Line 222
      m=1;
      k.KO(2,t,"ᒥᐧ");
    }
    else if(k.KCM(2,t,"ᒽᐊ",2)) {   // Line 223
      m=1;
      k.KO(2,t,"ᒪᐧ");
    }
    else if(k.KCM(2,t,"ᒽᐅ",2)) {   // Line 224
      m=1;
      k.KO(2,t,"ᒧᐧ");
    }
    else if(k.KCM(2,t,"ᒽᐁ",2)) {   // Line 225
      m=1;
      k.KO(2,t,"ᒣᐧ");
    }
    else if(k.KA(0,k.KC(2,1,t),this.s_CC)&&k.KCM(1,t,"ᐁ",1)) {   // Line 231
      m=1;
      k.KIO(2,this.s_Ce,1,t);
    }
    else if(k.KA(0,k.KC(2,1,t),this.s_CC)&&k.KCM(1,t,"ᐃ",1)) {   // Line 232
      m=1;
      k.KIO(2,this.s_Ci,1,t);
    }
    else if(k.KA(0,k.KC(2,1,t),this.s_CC)&&k.KCM(1,t,"ᐄ",1)) {   // Line 233
      m=1;
      k.KIO(2,this.s_Cii,1,t);
    }
    else if(k.KA(0,k.KC(2,1,t),this.s_CC)&&k.KCM(1,t,"ᐅ",1)) {   // Line 234
      m=1;
      k.KIO(2,this.s_Cu,1,t);
    }
    else if(k.KA(0,k.KC(2,1,t),this.s_CC)&&k.KCM(1,t,"ᐆ",1)) {   // Line 235
      m=1;
      k.KIO(2,this.s_Cuu,1,t);
    }
    else if(k.KA(0,k.KC(2,1,t),this.s_CC)&&k.KCM(1,t,"ᐅ",1)) {   // Line 236
      m=1;
      k.KIO(2,this.s_Co,1,t);
    }
    else if(k.KA(0,k.KC(2,1,t),this.s_CC)&&k.KCM(1,t,"ᐆ",1)) {   // Line 237
      m=1;
      k.KIO(2,this.s_Coo,1,t);
    }
    else if(k.KA(0,k.KC(2,1,t),this.s_CC)&&k.KCM(1,t,"ᐊ",1)) {   // Line 238
      m=1;
      k.KIO(2,this.s_Ca,1,t);
    }
    else if(k.KA(0,k.KC(2,1,t),this.s_CC)&&k.KCM(1,t,"ᐋ",1)) {   // Line 239
      m=1;
      k.KIO(2,this.s_Caa,1,t);
    }
    else if(k.KCM(2,t,"ᐃᐃ",2)) {   // Line 254
      m=1;
      k.KO(2,t,"ᐄ");
    }
    else if(k.KCM(2,t,"ᐅᐅ",2)) {   // Line 255
      m=1;
      k.KO(2,t,"ᐆ");
    }
    else if(k.KCM(2,t,"ᐊᐊ",2)) {   // Line 256
      m=1;
      k.KO(2,t,"ᐋ");
    }
    else if(k.KA(0,k.KC(2,1,t),this.s_Ci)&&k.KCM(1,t,"ᐃ",1)) {   // Line 257
      m=1;
      k.KIO(2,this.s_Cii,1,t);
    }
    else if(k.KA(0,k.KC(2,1,t),this.s_Cu)&&k.KCM(1,t,"ᐅ",1)) {   // Line 258
      m=1;
      k.KIO(2,this.s_Cuu,1,t);
    }
    else if(k.KA(0,k.KC(2,1,t),this.s_Co)&&k.KCM(1,t,"ᐅ",1)) {   // Line 259
      m=1;
      k.KIO(2,this.s_Coo,1,t);
    }
    else if(k.KA(0,k.KC(2,1,t),this.s_Ca)&&k.KCM(1,t,"ᐊ",1)) {   // Line 260
      m=1;
      k.KIO(2,this.s_Caa,1,t);
    }
    else if(k.KCM(2,t,"ᐤᐁ",2)) {   // Line 270
      m=1;
      k.KO(2,t,"ᐁᐧ");
      k.KDO(-1,t,0);
    }
    else if(k.KCM(2,t,"ᐤᐃ",2)) {   // Line 271
      m=1;
      k.KO(2,t,"ᐃᐧ");
    }
    else if(k.KCM(2,t,"ᐤᐅ",2)) {   // Line 273
      m=1;
      k.KO(2,t,"ᐅᐧ");
    }
    else if(k.KCM(2,t,"ᐤᐊ",2)) {   // Line 275
      m=1;
      k.KO(2,t,"ᐊᐧ");
    }
    if(m) {
    
      r=this.g_MakeSyllables(t,e);
    }
    return r;
  };
}
