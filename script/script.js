var map = "";
var map = "";
var map = "";
var map = "";

function sindan(){

    //名前と名字を取得
    const name = document.getElementById("name").value;
    const family_name = document.getElementById("family_name").value
    
    //診断メーカーで言うところの[診断結果基本テキスト]
    document.getElementById("p_name").innerHTML = family_name+" "+name+"さん";
    
    rand = 5; //最大数
    rand - 1; //0から始まるデータなので-1する
    Random_expansion = Math.floor(Math.random()*rand);
    console.log(Random_expansion);

        if(Random_expansion == 0){
            var expansion = "新生エオルゼア";

        }else if(Random_expansion == 1){
            var expansion = "蒼天のイシュガルド";


        }else if(Random_expansion == 2){
            var expansion = "紅蓮のリベレーター";
            
        }else if(Random_expansion == 3){
            var expansion = "漆黒のヴィランズ";
            sb_map();
            console.log(map);
            
        }else if(Random_expansion == 4){
            var expansion = "暁月のフィナーレ";
            ew_map();
            console.log(map);
        }
        document.getElementById("p_name").innerHTML = family_name+" "+name+"さん"+"<br/>"+map+"に登場";

        


    //拡張
        //Version・サブクエストに登場
            //エリア名
                //キャラ
}

function arr_map(){
    rand = 6; //最大数
            rand - 1; //0から始まるデータなので-1する
            Random_map = Math.floor(Math.random()*rand);
            console.log(Random_map);
                if(Random_map == 0){
                    map = "ラヴィリンソス";

                }else if(Random_map == 1){
                    map = "サベネア島";

                }else if(Random_map == 2){
                    map = "ガレマルド";

                }else if(Random_map == 3){
                    map = "嘆きの海";

                }else if(Random_map == 4){
                    map = "エルピス";

                }else if(Random_map == 5){
                    map = "ウルティマ・トゥーレ";

                }
}

function hw_map(){
    rand = 6; //最大数
            rand - 1; //0から始まるデータなので-1する
            Random_map = Math.floor(Math.random()*rand);
            console.log(Random_map);
                if(Random_map == 0){
                    map_ = "ラヴィリンソス";

                }else if(Random_map == 1){
                    map = "サベネア島";

                }else if(Random_map == 2){
                    map = "ガレマルド";

                }else if(Random_map == 3){
                    map = "嘆きの海";

                }else if(Random_map == 4){
                    map = "エルピス";

                }else if(Random_map == 5){
                    map = "ウルティマ・トゥーレ";

                }
}

function sb_map (map){
    rand = 2; //最大数
    rand - 1; //0から始まるデータなので-1する
    Random_map = Math.floor(Math.random()*rand);
    console.log(Random_map);
        if(Random_map == 0){
            sb_map_1()
            return map
            console.log(map)
        }else if(Random_map == 1){
            sb_map_2()
            return map
            console.log(map)
        }
}

//ギラバニア
function sb_map_1(){
    rand = 3; //最大数
    rand - 1; //0から始まるデータなので-1する
    Random_map = Math.floor(Math.random()*rand);
    console.log(Random_map);
        if(Random_map == 0){
            map = "ギラバニア辺境地帯";
                return

        }else if(Random_map == 1){
            map = "ギラバニア山岳地帯";
                return

        }else if(Random_map == 2){
            map = "ギラバニア湖畔地帯";
                return

        }
}

//東方地域
function sb_map_2(){
            rand = 3; //最大数
            rand - 1; //0から始まるデータなので-1する
            Random_map = Math.floor(Math.random()*rand);
            console.log(Random_map);
                if(Random_map == 0){
                    map = "紅玉海";
                        return

                }else if(Random_map == 1){
                    map = "ヤンサ";
                        return

                }else if(Random_map == 2){
                    map = "アジムステップ";
                        return

                }
}

function ew_map(){
    rand = 6; //最大数
            rand - 1; //0から始まるデータなので-1する
            Random_map = Math.floor(Math.random()*rand);
            console.log(Random_map);
                if(Random_map == 0){
                    map = "ラヴィリンソス";

                }else if(Random_map == 1){
                    map = "サベネア島";

                }else if(Random_map == 2){
                    map = "ガレマルド";

                }else if(Random_map == 3){
                    map = "嘆きの海";

                }else if(Random_map == 4){
                    map = "エルピス";

                }else if(Random_map == 5){
                    map = "ウルティマ・トゥーレ";

                }
}