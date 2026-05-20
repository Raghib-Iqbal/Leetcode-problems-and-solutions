


        const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];


        function maping(array) {
            // let result = {};
            // array.forEach(item => {

            //     result[item] = (result[item] || 0) + 1;

            // });


            // let frequentMap = new Map(Object.entries(result));
            // return frequentMap;
            const map = new Map();

            arr.forEach(item => {
                map.set(item, (map.get(item) || 0) + 1);
            });


            return map
            //      If interviewer asks:

            // “Why use Map instead of Object?”

            // You should say:

            // Map allows any type of key (object, function, etc.)
            // Better performance for frequent insert/delete
            // Has built-in methods (get, set, has)


        }
        console.log(maping(arr));
        /////////////Problem 2: Group By Property


        const users = [
            { name: "A", role: "admin" },
            { name: "B", role: "user" },
            { name: "C", role: "admin" }
        ];


        function grouping(data) {

            let result = {};
            data.forEach(user => {

                const role = user.role;

                // if role doesn't exist → create array
                if (!result[role]) {
                    result[role] = [];
                }


                // push user into correct group
                result[role].push(user.name);


            })



            return result;

        }


        // console.log(grouping(users));

        /// remove duplicates and make orders||||||||||||find most frequent;

        const array1 = [1, 3, 2, 2, 1, 4];

        let set1 = new Set([...new Set(array1)].sort((a, b) => a - b));

        console.log(set1);
        (function () {
            const arr = [1, 3, 1, 3, 2, 1];
            let count = {}, maxCount = 0;
            function mostReapeted(data) {
                let result, key;
                for (let i of data) {
                    count[i] = (count[i] || 0) + 1;
                    console.log(count[i]);
                    if (count[i] > maxCount) {
                        maxCount = count[i];
                        result = i;
                        key = count[i];

                    }
                }

                return result;
            }
            console.warn(mostReapeted(arr));
        })();

        //////////////

        (function () {
            const data = [
                { id: 1, category: "fruit", name: "apple" },
                { id: 2, category: "fruit", name: "banana" },
                { id: 3, category: "veg", name: "carrot" }
            ];
            function process(data) {

                let result = {};

                data.forEach(ele => {
                    let category = ele.category;
                    if (!result[category]) {
                        result[category] = [];
                    }
                    result[category].push(ele.name);
                })
                return result;
            }
            console.log(process(data));
        })();






        ///////🧩 Problem 4: Invert Object (Key ↔ Value);

        const obj = {
            a: 1,
            b: 2,
            c: 1
        };

        function invert(data) {
            let result = {};

            for (ele in obj) {
                if (!result[obj[ele]]) {
                    result[obj[ele]] = [];
                }
                result[obj[ele]].push(ele);
            }
            return result;
        }
        console.log(invert(obj));

        ////  real life frontend api problem
        const orders = [
            {
                id: 1,
                customer: "Rahim",
                items: [
                    { name: "apple", price: 100, qty: 2 },
                    { name: "banana", price: 50, qty: 3 }
                ]
            },
            {
                id: 2,
                customer: "Karim",
                items: [
                    { name: "apple", price: 100, qty: 1 }
                ]
            },
            {
                id: 2,
                customer: "Karim",
                items: [
                    { name: "apple", price: 100, qty: 1 }
                ]
            }
        ];


        /////// part 1
        function process(orders) {
            let result = {};
            orders.forEach(ele => {
                let customer = ele.customer;
                let items = ele.items;

                if (!result[customer]) {
                    result[customer] = {
                        totalSpent: 0,
                        items: {}
                    };
                }



                //  result[customer].totalSpent = items.reduce((total, item) => total += item.price * item.qty, 0);
                items.forEach(item => {
                    // result[customer].totalSpent += item.price * item.qty;
                    console.log(item.price);
                });




                items.forEach(item => {
                    result[customer].totalSpent += item.price * item.qty;
                    result[customer].items[item.name] = (result[customer].items[item.name] || 0) + item.qty;
                });


            });



            return result;

        }


        let processed = process(orders);
        console.log(processed);
    
        const sorted = Object.entries(processed).map(([customer, info]) => {
            return {
                customer,
                totalSpent: info.totalSpent
            };
        })  .sort((a, b) => b.totalSpent - a.totalSpent);

        console.log(sorted);