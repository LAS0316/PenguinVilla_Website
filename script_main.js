            const userId =
            [
            'zcbm5829',
            'abc1234',
            'thdwlgn',
            'toyotoyo0705',
            'jibboong',
            'puppisi3'
            ];

            const userPW =
            [
            'bbeeyy5829',
            '1234',
            'a1b2c3d4',
            'akvhqkqh1234',
            'bbiriribbangbborong',
            'Nabinunbaboya0113'
            ];

            const userNAME =
            [
            '라스',
            '테스트',
            '토레비',
            '마포',
            '지풍',
            '토이'
            ]

            const userCode = 
            [
                '100',
                '999',
                '203',
                'gast',
                '202',
                '104'
            ]

            var name_user;
            var code_user;

            function Pass()
            {
                if(userId.includes(id.value))
                {
                    if(pw.value == userPW[userId.indexOf(id.value)])
                    {
 
                        name_user = userNAME[userId.indexOf(id.value)];
                        code_user = userCode[userId.indexOf(id.value)];
                        
                        alert(name_user+"님 환영합니다!");

                        localStorage.setItem('name_user_move',name_user);
                        localStorage.setItem('code_user_move',code_user);

                        window.open("penguinvillamain.html","_self",);

                    }else
                    {
                        alert("비밀번호를 확인해주세요.");
                    }

                }else
                {
                    alert("아이디와 비밀번호를 확인해주세요.");
                }

            }

            function Login(){

                name_user = localStorage.getItem('name_user_move');
                code_user = localStorage.getItem('code_user_move');

                code_user = code_user + "호";

                document.getElementById("name_user").innerHTML=name_user;
                document.getElementById("code_user").innerHTML=code_user;
            }




