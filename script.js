let tempamount = 0;
let datas = [];

const budget = document.getElementById("budget");
const category = document.getElementById("category");
const expensesamount = document.getElementById("expenses-amount");
const amount = document.getElementById("amount");
const expensesbutton = document.getElementById("expenses-button");
const budgetbutton = document.getElementById("budget-button");
const expendvlaue = document.getElementById("expend-vlaue");
// Get the data from local storage 
const storedExpenses = localStorage.getItem('expenses');
if (storedExpenses != null) {
  expenses = JSON.parse(storedExpenses);
  expenseList.appendChild(expenses);
}


// The function of adding budget

budgetbutton.addEventListener("click", function(e) {
    tempamount = budget.value
    amount.innerHTML = tempamount; 
    budget.value = "";

})

// The function of adding expenses 
expensesbutton.addEventListener("click", function(e){
    
    const expenseList = document.getElementById("list");
    const newExpenseItem = document.createElement("li");
    

    
    //Add expense item to list 
    newExpenseItem.textContent = `${category.value}: $${expensesamount.value}`;
    expenseList.appendChild(newExpenseItem);
    //Save data to localStorage 

    const data = {
        category: category.value,
        amount: expensesamount.value
    };
    // console.log(data)
    datas.push(data);
    localStorage.setItem('expenses', JSON.stringify(datas));

    //Clear category and expenses calue 
    category.value = expensesamount.value = "";
})
