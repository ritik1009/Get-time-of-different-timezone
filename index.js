let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// We can add more time_zone if we want in the array or add the whole time zone 
let time_zone_list = ['Indian/Cocos','America/New_York'];//Intl.supportedValuesOf('timeZone');
// The Default TimeZone 
let time_zone = 'Indian/Cocos'
let Interval_ = undefined;
function time_display(time_zone){
    if (Interval_!=undefined){
        clearInterval(Interval_)
    }
    Interval_ = setInterval(()=>{
    a = new Date();
    date = a.toLocaleDateString(undefined,options,{timeZone: `${time_zone}`});
    //time = a.getHours() + ':' + a.getMinutes() +':'+ a.getSeconds();
    time = a.toLocaleTimeString(undefined,{timeZone: `${time_zone}`});
    document.getElementById('time').innerHTML = time + "<br>on " + date;
    let str = '';
    let time_zone_drop_down = document.getElementById("time_s");
    time_zone_list.forEach(element => {
        str += `
                <button class="dropdown-item" onclick="time_display('${element}')">${element}</button>
                            `;
    });
    time_zone_drop_down.innerHTML = str;
    },1000)
}
time_display(time_zone);