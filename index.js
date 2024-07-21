import { basic,branch,mointor} from './data.js';

const main = document.querySelector('.content .main-content');
const content = document.querySelector('.content .main-content .reading ul');
const btns = document.querySelectorAll('.content .links ul li');
btns.forEach((e)=>{
    e.addEventListener('click',(ele)=>{
        if(ele.target.textContent.toLowerCase() ==='basics') makeacall(basic)
            else if(ele.target.textContent.toLowerCase() ==='branching') makeacall(branch)
        else makeacall(mointor)
})
})
function makeacall(arr){
    content.innerHTML = '';
    arr.forEach((data) => {
        addToContent(data)
    })
    const code = document.querySelectorAll('#code')
    code.forEach((e)=>{
         e.addEventListener('click',(e)=>{
            navigator.clipboard.writeText(e.target.textContent).then(() => {
                window.alert('Command Copied!!');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
         })
    })
}

function addToContent(data) {
    const newLi = document.createElement('li');
    newLi.innerHTML = `
    ${data &&
        `
        <div>
        <h2>${data.heading }</h2>
        <p>${data.para}</p>
        <ul> 
        ${data.points&& data.points.split('\b').map((ele) => {
            return `
            <li>${ele.trim()}</li>`
            }).join('')
            }
            </ul>
            <code id='code'> ${data.cmd}</code>
            
                </div>
                `
                
            }
            `;
            content.append(newLi);
        }
       
        
        