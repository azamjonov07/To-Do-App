let form = document.querySelector('.form')
let input = document.querySelector('.input');
let add = document.querySelector('.btn');
let plan = document.querySelector('.plan');
let ansver = document.querySelector('.ansver')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
        alert('Add Plan')


    } else {
        const plans = document.createElement("div");
        const plan = document.createElement("input");
        const opt = document.createElement("div");
        const edit = document.createElement("button");
        const dell = document.createElement("button");


        ansver.appendChild(plans)
        plans.appendChild(plan)
        plans.appendChild(opt)
        opt.appendChild(edit)
        opt.appendChild(dell)


        plans.classList.add('plans')
        plan.classList.add('plan')
        edit.classList.add("edit")
        edit.classList.add("btn2")
        dell.classList.add('dell')
        dell.classList.add('btn2')
        opt.classList.add('opt')



        edit.innerText = "Edit";
        dell.innerText = "delete";



        plan.value = input.value
        plan.setAttribute("readonly", "readonly")
        input.value = " "

        edit.addEventListener('click', (e) => {
            plan.removeAttribute("readonly", "readonly")
            plan.focus();
            edit.innerText = "save"
            plan.addEventListener('click', (e) => {
                plan.focus()
            })
            if (!plan.value) {
                alert('Your plan has been deleted');
                plans.remove()
                plan.remove()
                edit.remove()
                dell.remove()
            } else {
                if (edit.innerText.toLowerCase() == "save") {
                    edit.addEventListener('click', (e) => {
                        plan.setAttribute("readonly", "readonly")
                        edit.innerText = "Edit";


                        plan.addEventListener('click', (e) => {
                            plan.blur()
                        })
                    })
                }
            }
        })
        dell.addEventListener('click', (e) => {
            plans.remove()
            plan.remove()
            edit.remove()
            dell.remove()
        })
        plan.addEventListener('click', (e) => {
            plan.blur()
        })
    }

})

                              