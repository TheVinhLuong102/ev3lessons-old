all_mission = []

function createbutton(mission,points,description){
window[mission] = 0
document.write('<tr>\
  <td width="200" style="font-size: 100%; background-color: sky;">\
                      '+description+'\
                    </td>\
                  </tr>\
                  <tr>\
                    <td>\
                      <fieldset data-role="controlgroup" data-type="horizontal" style="text-align: center;">\
                        <label for="yes'+mission+'">Yes</label>\
                        <input  type="radio" onclick="recalc('+points+',\''+mission+'\')" name="'+mission+'" value="true" id="yes'+mission+'">\
                        <label for="no'+mission+'">No</label>\
                        <input  type="radio" onclick="recalc(0,\''+mission+'\')" name="'+mission+'"  value="false" id="no'+mission+'" checked>\
                      </fieldset>\
                    </td>\
                  </tr>')
		  }


		  function starttable(mission,image,children){
		  x = 0
		  element = 1 + 2*children.length
		  all_mission = all_mission.concat([[mission,children]])
 document.write('\
              <table style="border: 1px solid black; border-collapse: collapse; " border="1">\
                <tr>\
                  <td rowspan="'+element+'"> <img src="missions/'+image+'" width="80"></td>\
                  <td width="300" style="font-size: 110%; text-align: center; background-color: Blue; color: white;">\
                    '+mission+'\
                    <i style="font-style: normal;" id="'+mission+'pts">0</i>\
                  </td>\
                </tr>\
		')
		}
		function endtable() {
document.write('</tr></td></table>')
		}

function createrange(mission, increment, min, max, start, description) {
    window[mission] = 0
document.write('<tr>\
                  <td width="200" style="font-size: 100%; background-color: sky;">\
                    '+description+'	  </td>\
</tr>\
                  <tr>\
                    <td width="200">\
                      <input type="range" data-show-value="true" name="'+mission+'" id="'+mission+'" value="'+start+'" min="'+min+'" max="'+max+'" step="1" onchange=\'recalc(this.value*'+increment+',"'+mission+'")\'>\
                      <p id="'+mission+'Txt" style="color: red"></p>\
                    </td>\
                  </tr>')

    if (start > 0) {
	recalc(increment*start,mission)
    }

}


function startrow(width) {
//		  if (screen.width < width) {
//				     alert(screen.width)
//				     alert(width)
		  document.write('<td valign="top">')
//}
		   }
function endrow(width) {
//if (screen.width < width) {
//		   alert('activate')
		   document.write('</td>')
//}
		   }


function checkbuttonconflict(conflict,mission,priority) {
    if (priority == mission || priority == conflict) {
    if (document.getElementById('yes'+mission).checked == true && document.getElementById('yes'+conflict).checked == true) {
	if (priority == conflict) {
	setTimeout(function(){ document.getElementById('no'+mission).click()  }, 30);
	}
	if (priority == mission) {
	setTimeout(function(){ document.getElementById('no'+conflict).click()  }, 30);
	}
    }
    }
}
conflicts = []
function createbuttonconflict(conflict,mission,priority){
    conflicts = conflicts.concat([[conflict,mission,priority]])
}
