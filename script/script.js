var map = "";
var expansion = "";
var city = "";

function sindan(){

    //名前と名字を取得
    const name = document.getElementById("name").value;
    const family_name = document.getElementById("family_name").value;
    const full_name = name + " " + family_name;

    if(name == ""|| family_name == ""){
        document.getElementById("p_name").innerHTML = full_name + "名前を入力しろ！！";

        
        document.getElementById("name_source").innerHTML = "名前：" + "Null";
        document.getElementById("expansion").innerHTML = "拡張：" + "Null";;
        document.getElementById("map").innerHTML = "マップ名：" + "Null";;
    }else{
        
    
    //診断処理
    expansiones();

    
    //診断メーカーで言うところの[診断結果基本テキスト]
    // document.getElementById("p_name").innerHTML = full_name + "さん" + "<br/>" + expansion+ "の" +map+ "に登場";

    
    // #実装済み
    // Full name → 入力された名前
    // expansion → FF14の拡張パッケージの名前
    // map → FF14のマップ名（都市は除く）
    
    // #未実装 
    // city → FF14の町の名前
    // 

        //データ一覧を書き出すだけ
        document.getElementById("name_source").innerHTML = "名前：" + full_name;
        document.getElementById("expansion").innerHTML = "拡張：" + expansion;
        document.getElementById("map").innerHTML = "マップ名：" + map;
        
        }
    }

function expansiones(){
    rand = 5; //最大数
    rand = rand - 1; //0から始まるデータなので-1する
    Random_expansion = Math.floor(Math.random()*rand);
    console.log(Random_expansion);

        if(Random_expansion == 0){
            expansion = "新生エオルゼア";
            arr_map()

        }else if(Random_expansion == 1){
            expansion = "蒼天のイシュガルド";
            hw_map()

        }else if(Random_expansion == 2){
            expansion = "紅蓮のリベレーター";
            sb_map();
            
            
        }else if(Random_expansion == 3){
            expansion = "漆黒のヴィランズ";
            shb_map();
            
            
        }else if(Random_expansion == 4){
            expansion = "暁月のフィナーレ";
            ew_map();

        }

}

//新生エオルゼア a Realm Reborn(arr)
function arr_map(){
    
    map = "";
    rand = 4; //最大数
    rand = rand - 1; //0から始まるデータなので-1する
            Random_map = Math.floor(Math.random()*rand);
            console.log(Random_map);
                if(Random_map == 0){
                    //ラノシア
                    arr_map1()
                    console.log(map)
                    return map

                }else if(Random_map == 1){
                    //黒衣森
                    arr_map2()
                    console.log(map)
                    return map

                }else if(Random_map == 2){
                    //ザナラーン
                    arr_map3()
                    console.log(map)
                    return map

                }else if(Random_map == 3){
                    //その他
                    arr_map4()
                    console.log(map)
                    return map

                }
}

//ラノシア
function arr_map1(){
            rand = 6; //最大数
            rand = rand- 1; //0から始まるデータなので-1する
            Random_map = Math.floor(Math.random()*rand);
            console.log(Random_map);
                if(Random_map == 0){
                    map = "中央ラノシア";
                    return

                }else if(Random_map == 1){
                    map = "低地ラノシア";
                    return

                }else if(Random_map == 2){
                    map = "東ラノシア";
                    return

                }else if(Random_map == 3){
                    map = "西ラノシア";
                    return

                }else if(Random_map == 4){
                    map = "高地ラノシア";
                    return

                }else if(Random_map == 5){
                    map = "外地ラノシア";
                    return

                }
}

//黒衣森
function arr_map2(){
            rand = 4; //最大数
            rand = rand- 1; //0から始まるデータなので-1する
            Random_map = Math.floor(Math.random()*rand);
            console.log(Random_map);
                if(Random_map == 0){
                    map = "黒衣森：中央森林";
                    return

                }else if(Random_map == 1){
                    map = "黒衣森：東部森林";
                    return

                }else if(Random_map == 2){
                    map = "黒衣森：南部森林";
                    return

                }else if(Random_map == 3){
                    map = "黒衣森：北部森林";
                    return

                }
}

//ザナラーン
function arr_map3(){
        rand = 5; //最大数
        rand = rand- 1; //0から始まるデータなので-1する
        Random_map = Math.floor(Math.random()*rand);
            console.log(Random_map);
                if(Random_map == 0){
                    map = "西ザナラーン";
                    return

                }else if(Random_map == 1){
                    map = "中央ザナラーン";
                    return

                }else if(Random_map == 2){
                    map = "東ザナラーン";
                    return

                }else if(Random_map == 3){
                    map = "南ザナラーン";
                    return

                }else if(Random_map == 4){
                    map = "北ザナラーン";
                    return

                }
}

//その他
function arr_map4(){
    rand = 3; //最大数
    rand = rand- 1; //0から始まるデータなので-1する
    Random_map = Math.floor(Math.random()*rand);
        console.log(Random_map);
            if(Random_map == 0){
                map = "ウルヴズジェイル係船場";
                return

            }else if(Random_map == 1){
                map = "ゴールドソーサー";
                return

            }else if(Random_map == 2){
                map = "モードゥナ";
                return

            }
}


//蒼天のイシュガルド Heavensward(hw)
function hw_map (){
    rand = 3; //最大数
    rand = rand - 1; //0から始まるデータなので-1する
    Random_map = Math.floor(Math.random()*rand);
    console.log(Random_map);
        if(Random_map == 0){
            hw_map1()
            console.log(map)
            return map
        }else if(Random_map == 1){
            hw_map2()
            console.log(map)
            return map
        }else if(Random_map == 2){
            hw_map3()
            console.log(map)
            return map
        }
}

//アバラシア
function hw_map2(){

    rand = 2; //最大数
    rand = rand - 1; //0から始まるデータなので-1する
            Random_map = Math.floor(Math.random()*rand);
            console.log(Random_map);
                if(Random_map == 0){
                    map = "アバラシア雲海";
                    return

                }else if(Random_map == 1){
                    map = "アジス・ラー";
                    return

                }
}

//ドラヴァニア
function hw_map1(){

    rand = 3; //最大数
    rand = rand - 1; //0から始まるデータなので-1する
            Random_map = Math.floor(Math.random()*rand);
            console.log(Random_map);
                if(Random_map == 0){
                    map = "高地ドラヴァニア";

                }else if(Random_map == 1){
                    map = "ドラヴァニア雲海";

                }else if(Random_map == 2){
                    map = "低地ドラヴァニア";
                }
}

//クルザス（蒼天）
function hw_map3(){
    map = "クルザス西武高地";

}


//紅蓮のリベレーター
function sb_map (){
    rand = 2; //最大数
    rand = rand - 1; //0から始まるデータなので-1する
    Random_map = Math.floor(Math.random()*rand);
    console.log(Random_map);
        if(Random_map == 0){
            sb_map_1()
            console.log(map)
            return map
        }else if(Random_map == 1){
            sb_map_2()
            console.log(map)
            return map
        }
}

//ギラバニア
function sb_map_1(){
    rand = 3; //最大数
    rand = rand - 1; //0から始まるデータなので-1する
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
            rand = rand - 1; //0から始まるデータなので-1する
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

//漆黒のヴィランズ
function shb_map(){
    rand = 6; //最大数
    rand = rand - 1; //0から始まるデータなので-1する
            Random_map = Math.floor(Math.random()*rand);
            console.log(Random_map);
                if(Random_map == 0){
                    map = "レイクランド";

                }else if(Random_map == 1){
                    map = "コルシア島";

                }else if(Random_map == 2){
                    map = "アム・アレーン";

                }else if(Random_map == 3){
                    map = "イル・メグ";

                }else if(Random_map == 4){
                    map = "ラケティカ大森林";

                }else if(Random_map == 5){
                    map = "テンペスト";

                }
}

//暁月のフィナーレ
function ew_map(){
    rand = 6; //最大数
            rand = rand- 1; //0から始まるデータなので-1する
            Random_map = Math.floor(Math.random()*rand);
            console.log(Random_map);
                if(Random_map == 0){
                    map = "ラヴィリンソス";
                    return

                }else if(Random_map == 1){
                    map = "サベネア島";
                    return

                }else if(Random_map == 2){
                    map = "ガレマルド";
                    return

                }else if(Random_map == 3){
                    map = "嘆きの海";
                    return

                }else if(Random_map == 4){
                    map = "エルピス";
                    return

                }else if(Random_map == 5){
                    map = "ウルティマ・トゥーレ";
                    return

                }
}