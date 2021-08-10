// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我们",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "可爱的营长大大",  // 同上...
        "今天是你的生日",
        "今天我们大家",
        "一起陪你哦",
        "你这次会议",
        "特地选在生日",
        "应该不是故意的吧XD",
        "既然你敢选生日开会",
        "我们也敢来玩一下",
        "嘿嘿生日快乐呀！~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "我们的营长大大": "./https://scontent.fkul21-2.fna.fbcdn.net/v/t1.6435-9/123645560_2717827325134581_5956799462299634909_n.jpg?_nc_cat=111&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=tdhFh3WsdmEAX_XPFXm&tn=eKwifJ9Rs4Uc_MQY&_nc_ht=scontent.fkul21-2.fna&oh=3fdf2aa4ca7b06dce28cc6d39a668520&oe=61361B5B",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
