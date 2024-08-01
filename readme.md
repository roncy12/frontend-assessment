- Clone my forked repository git clone https://github.com/roncy12/frontend-assessment.git
- Then on terminal "cd frontend-assessment" then "npm install"
- after installing "npm run dev"


Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana.

--The expression ('b' + 'a' + + 'a' + 'a').toLowerCase() evaluates to “banana.”
-- Here’s how it works: First, 'b' + 'a' becomes 'ba'. Then, + 'a' converts 'a' to NaN, resulting in 'baNaNa'. Finally, calling .toLowerCase() on it gives us the final output, which is the string “banana.”