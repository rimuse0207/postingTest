import React,{useState} from "react";
import PostingContent from './PostingContent';
import LoginPage from './LoginPage';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

const RouterPage = () =>{

    const [LoginData,setLoginData] = useState({
        id:null,
        password:null,
        name:null
        
    })
    const [LoginCheck,setLoginCheck]  = useState(false)
    

    const IdChange =(data) =>{
        console.log(data);
        setLoginData({
            ...LoginData,
            id:data.target.value
        })
    }

    const PasswordChange =(data) =>{
        setLoginData({
            ...LoginData,
            password:data.target.value
        })
    }

    const passwordIntial = () =>{
        setLoginData({
            ...LoginData,
            password:""
        })
    }

    const LoginSuccessName = (data) =>{
        setLoginData({
            ...LoginData,
            name:data
        })
    }


    return(
  
    <div>
        {LoginCheck? (
                    <PostingContent LoginData={LoginData}></PostingContent>
                ) : (
                    <LoginPage LoginData={LoginData} PasswordChange={(data)=>PasswordChange(data)} IdChange={data=>IdChange(data)} setLoginCheck={data=>setLoginCheck(data)} passwordIntial={passwordIntial} LoginSuccessName={data=>LoginSuccessName(data)}></LoginPage>
                )}
    </div>
    )
}

export default RouterPage;