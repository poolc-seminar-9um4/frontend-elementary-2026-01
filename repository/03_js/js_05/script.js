let poolc_list = [
  {
    name: "주진하",
    credit: "23"
  },
  {
    name: "김대현",
    credit: "6"
  },
  {
    name: "최동연",
    credit: "-7"
  },
  {
    name: "류다민",
    credit: "5"
  },
  {
    name: "신우석",
    credit: "11"
  },
  {
    name: "정현기",
    credit: "18"
  }
]

function MemberOverCredit(num) {
    for (const obj of poolc_list){
        if (obj["credit"] >= num){
            console.log(obj["name"])
        }
    }
}