import axios from "axios";
import React,{useState} from "react";
import  "./App.css"

const PostingContent = ( {LoginData}) =>{
    const [WriteInfoData,setWriteInfoData] = useState({
        English_family_name :"",
        English_first_name :"",
        phone_Number :"",
        epexternalmail:"", 
    })


    const handleClicks = async() =>{
        try{
            if(WriteInfoData.English_family_name === "" || WriteInfoData.English_first_name === "" || WriteInfoData.phone_Number === "" || WriteInfoData.epexternalmail === ""){
                alert("공란을 전부 적어주세요.");
                return;
            }else{
                const DataSend = await axios.post("http://192.168.0.196:3001/Login_app_servers/PostingDataSend",{
                    WriteInfoData,
                    LoginData
                })
                if(DataSend.data.dataSuccess){
                    alert("서버에 정상적으로 저장 되었습니다.");
                    alert("협조해 주셔서 감사합니다.");
                    setWriteInfoData({
                        English_family_name :"",
                        English_first_name :"",
                        phone_Number :"",
                        epexternalmail:"", 
                    })
                }else{
                    alert("IT팀에 문의 바랍니다.")
                }
            }
        }catch(error){
            console.log(error);
        }
    }

    return(
        <div id="wrapper">
            <h1 style={{textAlign:"center"}}>Brity Works(신규 그룹웨어) 등록을 위한 정보 수집</h1>
            <div id="content">
                <div className="Explain_container"> 
                    <h3 className="join_title"><label htmlFor="name">등록된 이름</label></h3>
                    <div className="Explain" style={{top:"0px"}}>수정 불가.</div>
                    <span className="box int_name">
                        <input type="text" id="name" className="int"  value={LoginData.name} readOnly/>
                    </span>
                    <span className="error_next_box"></span>
                </div>
                <div>
                    <h3 className="join_title"><label htmlFor="name">영어성</label></h3>
                    <span className="box int_name">
                        <input type="text" id="name" className="int"  placeholder="Yoo" value={WriteInfoData.English_family_name} onChange={(e)=>setWriteInfoData({...WriteInfoData,English_family_name:e.target.value})} />
                    </span>
                    <span className="error_next_box"></span>
                </div>
                <div>
                    <h3 className="join_title"><label htmlFor="name">영어이름</label></h3>
                    <span className="box int_name">
                        <input type="text" id="name" className="int" placeholder="Sungjae" value={WriteInfoData.English_first_name} onChange={(e)=>setWriteInfoData({...WriteInfoData,English_first_name:e.target.value})}/>
                    </span>
                    <span className="error_next_box"></span>
                </div>
                <div className="Explain_container">
                    <h3  style={{marginBottom:"40px"}}className="join_title"><label htmlFor="email">외부 이메일 주소</label></h3>
                    <div className="Explain">신규 그룹웨어의 비밀번호를 찾기 위한 이메일 주소입니다.
                    <div>예) a@gmail.com / a@naver.com 등</div></div>
                    <span className="box int_email">
                        <input type="text" id="email" className="int"  placeholder="slenyflower@naver.com" value={WriteInfoData.epexternalmail} onChange={(e)=>setWriteInfoData({...WriteInfoData,epexternalmail:e.target.value})}/>
                    </span>
                    <span className="error_next_box">이메일 주소를 다시 확인해주세요.</span>    
                </div>

                <div>
                    <h3 className="join_title"><label htmlFor="phoneNo">휴대전화</label></h3>
                    <span className="box int_mobile">
                        <input type="tel" id="mobile" className="int"   placeholder="010-0000-0000" value={WriteInfoData.phone_Number} onChange={(e)=>setWriteInfoData({...WriteInfoData,phone_Number:e.target.value})}/>
                    </span>
                    <span className="error_next_box"></span>    
                </div>
                
                <div className="btn_area">
                    <button type="button" id="btnJoin" onClick={handleClicks}>
                        <span>등록 하기</span>
                    </button>
                </div>

                

            </div> 
            

        </div> 
    )
}


export default PostingContent;