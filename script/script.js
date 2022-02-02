var map = "";
var expansion = "";

function sindan(){

    //名前と名字を取得
    const name = document.getElementById("name").value;
    const family_name = document.getElementById("family_name").value;
    const full_name = name + "" + family_name;
    
    //診断処理
    expansiones();

    //診断メーカーで言うところの[診断結果基本テキスト]
    document.getElementById("p_name").innerHTML = full_name + "さん" + "<br/>" + expansion+ "の" +map+ "に登場";

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

function arr_map(){
    
    map = "";
    // rand = 6; //最大数
    // rand = rand - 1; //0から始まるデータなので-1する
    //         Random_map = Math.floor(Math.random()*rand);
    //         console.log(Random_map);
    //             if(Random_map == 0){
    //                 map = "ラヴィリンソス";

    //             }else if(Random_map == 1){
    //                 map = "サベネア島";

    //             }else if(Random_map == 2){
    //                 map = "ガレマルド";

    //             }else if(Random_map == 3){
    //                 map = "嘆きの海";

    //             }else if(Random_map == 4){
    //                 map = "エルピス";

    //             }else if(Random_map == 5){
    //                 map = "ウルティマ・トゥーレ";

    //             }
}

function hw_map(){

    map = "";
    // rand = 6; //最大数
    // rand = rand - 1; //0から始まるデータなので-1する
    //         Random_map = Math.floor(Math.random()*rand);
    //         console.log(Random_map);
    //             if(Random_map == 0){
    //                 map_ = "ラヴィリンソス";

    //             }else if(Random_map == 1){
    //                 map = "サベネア島";

    //             }else if(Random_map == 2){
    //                 map = "ガレマルド";

    //             }else if(Random_map == 3){
    //                 map = "嘆きの海";

    //             }else if(Random_map == 4){
    //                 map = "エルピス";

    //             }else if(Random_map == 5){
    //                 map = "ウルティマ・トゥーレ";

    //             }
}

function sb_map (map){
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