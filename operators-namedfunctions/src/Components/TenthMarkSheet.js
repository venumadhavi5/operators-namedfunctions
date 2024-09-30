import React, { useRef } from 'react'

function TenthMarkSheet() {
    let firstnameInputRef= useRef();
    let lastnameInputRef = useRef();
    let engInputRef = useRef();
    let engSpanRef = useRef();
    let telInputRef = useRef();
    let telSpanRef = useRef();
    let hinInputRef = useRef();
    let hinSpanRef = useRef();
    let mathInputRef = useRef();
    let mathSpanRef = useRef();
    let sciInputRef = useRef();
    let sciSpanRef = useRef();
    let socInputRef = useRef();
    let socSpanRef = useRef();
    let resultParaRef = useRef();
    let calculateResult = ()=>{
        console.log( "Caluaculate the Result")
    }
    calculateResult();

  return (
    <div>
        <h1>Tenth MarkSheet</h1>
        <form>
            <div>
                <label>FirstName</label>
                <input ref={firstnameInputRef}></input>
                <span></span>
            </div>
            <div>
                <label>LastName</label>
                <input ref={lastnameInputRef}></input>
                <span></span>
                
            </div>
            <div>
                <label>English</label>
                <input type='number' ref={engInputRef}
                onChange={()=>{
                    console.log("eng onChange");
                    console.log(engInputRef.current.value);
                    if (engInputRef.current.value >=0 && engInputRef.current.value <=100) {
                        if (engInputRef.current.value >=35) {
                            engSpanRef.current.innerHTML ="Pass";
                            engSpanRef.current.style.backgroundColor="green";
                            
                        } else {
                            engSpanRef.current.innerHTML ="Fail";
                            engSpanRef.current.style.backgroundColor="red";
                            
                        }
                        
                    } else {
                        engSpanRef.current.innerHTML= "Invalid";
                        engSpanRef.current.style.backgroundColor="blue"
                        
                    }



                   
                   
                 }}
                  onFocus={()=>{
                    console.log("eng onFocus")
                    engInputRef.current.style.backgroundColor="lightpink";
                  }}
                   onBlur={()=>{
                    console.log("eng onBlur")
                    engInputRef.current.style.backgroundColor="";
                   }}
                ></input>
                <span ref={engSpanRef}></span>
            </div>
            <div>
                <label>Telugu</label>
                <input type='number' ref={telInputRef}
                onFocus={()=>{
                    console.log("tel onFocus")
                    telInputRef.current.style.backgroundColor="yellow";

                }}
                onChange={()=>{
                    console.log("tel onChange")
                    console.log(telInputRef.current.value);
                    if (telInputRef.current.value >=0 && telInputRef.current.value <=100) {
                        if (telInputRef.current.value >=35) {
                            telSpanRef.current.innerHTML ="Pass";
                            telSpanRef.current.style.backgroundColor="green";
                            
                        } else {
                            telSpanRef.current.innerHTML ="Fail";
                            telSpanRef.current.style.backgroundColor="red";
                            
                        }
                        
                    } else {
                        telSpanRef.current.innerHTML= "Invalid";
                        telSpanRef.current.style.backgroundColor="blue"
                        
                    }
                   
                }}
                onBlur={()=>{
                    console.log("tel onBlur")
                    telInputRef.current.style.backgroundColor = "";
                }}
                
                
                ></input>
                <span ref={telSpanRef}></span>
            </div>

            <div>
                <label>Hindi</label>
                <input type='number' ref={hinInputRef}
                onChange={()=>{
                    console.log("hin onChange");
                    console.log(hinInputRef.current.value);
                    if (hinInputRef.current.value >=0 && hinInputRef.current.value <=100) {
                        if (hinInputRef.current.value >=35) {
                            hinSpanRef.current.innerHTML ="Pass";
                            hinSpanRef.current.style.backgroundColor="green";
                            
                        } else {
                            hinSpanRef.current.innerHTML ="Fail";
                            hinSpanRef.current.style.backgroundColor="red";
                            
                        }
                        
                    } else {
                        hinSpanRef.current.innerHTML= "Invalid";
                        hinSpanRef.current.style.backgroundColor="blue"
                        
                    }

                   
                 }}
                  onFocus={()=>{
                    console.log("hin onFocus")
                    hinInputRef.current.style.backgroundColor="lightpink";
                  }}
                   onBlur={()=>{
                    console.log("hin onBlur")
                    hinInputRef.current.style.backgroundColor="";
                   }}
                
                
                
                ></input>
                <span ref={hinSpanRef}></span>
            </div>
            <div>
                <label>Maths</label>
                <input type='number' ref={mathInputRef}
                onChange={()=>{
                    console.log("maths onChange");
                    console.log(mathInputRef.current.value);
                    if (mathInputRef.current.value >=0 && mathInputRef.current.value <=100) {
                        if (mathInputRef.current.value >=35) {
                            mathSpanRef.current.innerHTML ="Pass";
                            mathSpanRef.current.style.backgroundColor="green";
                            
                        } else {
                            mathSpanRef.current.innerHTML ="Fail";
                            mathSpanRef.current.style.backgroundColor="red";
                            
                        }
                        
                    } else {
                        mathSpanRef.current.innerHTML= "Invalid";
                        mathSpanRef.current.style.backgroundColor="blue"
                        
                    }


                    

                   
                 }}
                  onFocus={()=>{
                    console.log("maths onFocus")
                    mathInputRef.current.style.backgroundColor="lightpink";
                  }}
                   onBlur={()=>{
                    console.log("maths onBlur")
                    mathInputRef.current.style.backgroundColor="";
                   }}
                
                
                ></input>
                <span ref={mathSpanRef}></span>
            </div>
            <div>
                <label>Science</label>
                <input type='number'ref={sciInputRef}
                onChange={()=>{
                    console.log("sci onChange");
                    console.log(sciInputRef.current.value);
                    if (sciInputRef.current.value >=0 && sciInputRef.current.value <=100) {
                        if (sciInputRef.current.value >=35) {
                            sciSpanRef.current.innerHTML ="Pass";
                            sciSpanRef.current.style.backgroundColor="green";
                            
                        } else {
                            sciSpanRef.current.innerHTML ="Fail";
                            sciSpanRef.current.style.backgroundColor="red";
                            
                        }
                        
                    } else {
                        sciSpanRef.current.innerHTML= "Invalid";
                        sciSpanRef.current.style.backgroundColor="blue"
                        
                    }
                   
                 }}
                  onFocus={()=>{
                    console.log("sci onFocus")
                    sciInputRef.current.style.backgroundColor="lightpink";
                  }}
                   onBlur={()=>{
                    console.log("sci onBlur")
                    sciInputRef.current.style.backgroundColor="";
                   }}
                
                ></input>
                <span ref={sciSpanRef}></span>
            </div>
            <div>
                <label>Social</label>
                <input type='number'ref={socInputRef}
                onChange={()=>{
                    console.log("soc onChange");
                    console.log(socInputRef.current.value);
                    if (socInputRef.current.value >=0 && socInputRef.current.value <=100) {
                        if (socInputRef.current.value >=35) {
                            socSpanRef.current.innerHTML ="Pass";
                            socSpanRef.current.style.backgroundColor="green";
                            
                        } else {
                            socSpanRef.current.innerHTML ="Fail";
                            socSpanRef.current.style.backgroundColor="red";
                            
                        }
                        
                    } else {
                        socSpanRef.current.innerHTML= "Invalid";
                        socSpanRef.current.style.backgroundColor="blue"
                        
                    }

                   
                 }}
                  onFocus={()=>{
                    console.log("soc onFocus")
                    socInputRef.current.style.backgroundColor="lightpink";
                  }}
                   onBlur={()=>{
                    console.log("soc onBlur")
                    socInputRef.current.style.backgroundColor="";
                   }}
                
                ></input>
                <span ref={socSpanRef}></span>
            </div>
            <button type='button' onClick={()=>{
                let firstName = firstnameInputRef.current.value;
                let lastName = lastnameInputRef.current.value;
                let engMarks = Number(engInputRef.current.value);
                let telMarks = Number(telInputRef.current.value);
                let hinMarks = Number(hinInputRef.current.value);
                let mathMarks = Number(mathInputRef.current.value);
                let sciMarks = Number(sciInputRef.current.value);
                let socMarks = Number(socInputRef.current.value);
                let result;
                if (engMarks <35 || telMarks <35 ||hinMarks <35 || mathMarks <35 ||sciMarks <35 || socMarks <35 ) {
                    result="Failed";
                    
                } else { result="Passed";
                    
                }



                let totalmarks = engMarks+telMarks+hinMarks+mathMarks+sciMarks+socMarks;
                alert(`${firstName} ${lastName} got  total marks are ${totalmarks}`);
                    resultParaRef.current.innerHTML=`${firstName} ${lastName} ${result} in Tenth and got total marks are ${totalmarks}`

            }}>Calculate Result</button>
            <p ref={resultParaRef}>Please enter your marks and Click it</p>
        </form>
      
    </div>
  )
}

export default TenthMarkSheet
