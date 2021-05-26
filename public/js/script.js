fetch('/api/customer').then(res => res.json()).then(customers => {
    console.log(customers);
});
