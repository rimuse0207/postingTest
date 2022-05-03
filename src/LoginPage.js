import axios from "axios";
import React from "react";
import "./LoginPage.css"

const LoginPage = ({LoginData,PasswordChange, IdChange,setLoginCheck,passwordIntial,LoginSuccessName}) =>{



    const HandleSubmit = async( e)=>{
        try{
            e.preventDefault();
        
            

            const PostLoginCheck = await axios.post("http://192.168.0.196:3001/Login_app_servers/PostingloginCheck",{
                id:LoginData.id,
                password:LoginData.password
            })

            if(PostLoginCheck.data.dataSuccess){
                console.log(PostLoginCheck)
                LoginSuccessName(PostLoginCheck.data.datas[0].name)
                setLoginCheck(true);
                
            }else{
                alert("비밀번호가 틀립니다.")
                passwordIntial();
            }

        }catch(error){
            console.log(error);

        }
    }

    return(
<div className="login-page">
    
  <div className="form">
  <h1>로그인</h1>
    <form className="login-form" onSubmit={e=>HandleSubmit(e)}>
      <h4 style={{textAlign:"start"}}>아이디</h4>
      <input type="text" placeholder="재택프로그램 ID" value={LoginData.id} onChange={e=> IdChange(e)}/>
      <h4 style={{textAlign:"start"}}>비밀번호</h4>
      <input type="password" placeholder="재택프로그램 Password" value={LoginData.password} onChange={e=> PasswordChange(e)}/>
      <button type="submit">login</button>
    </form>
  </div>
</div>
    )
}

export default LoginPage;