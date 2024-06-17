<h1 align="center">
    <a>MachineSync</a>
</h1>

<p align="center">
   <img  src="https://github.com/Icegreeen/blog-graphQL/assets/56550632/167b7feb-df28-42a4-a7fc-c0f326860699" />
</p>

# 🖍 How to works

This SaaS project allows users to purchase and consume credits for various features. Administrators can control feature availability, assign credit requirements, and manage credit packages. Users receive free credits upon registration, and can buy more via Stripe. The system tracks feature usage and ensures features are blocked if insufficient credits are available.
                             
# :pushpin: Table of Contents

* [Running Locally](#construction_worker-running-locally)
* [FAQ](#postbox-faq)
* [Issues](#bug-issues)
* [Contributing](#tada-contributing)

## :construction_worker: Running Locally

#### Clone repository
```bash
git clone https://github.com/Icegreeen/MachineSync
```
#### Install dependencies:
```bash
composer install
```
#### Execute web application in development mode
```bash
Backend: php artisan serve

Frontend: npm run dev
```
Open this address in your browser [http://localhost:8000](http://localhost:8000/)

#### Listen to webhook via Stripe cli:
```bash
stripe listen --forward-to localhost:8000/buy-credits/webhook
```
Payment success on webhook:

![759shots_so](https://github.com/Icegreeen/blog-graphQL/assets/56550632/452fa605-1828-4fab-b7f6-1c53e320e879)

# :postbox: Faq

**Question:** What are the technologies used in this project?

**Answer:** [Laravel](https://laravel.com/), [Tailwind](https://tailwindcss.com/), [PHP](https://www.php.net/), [Sqlite](https://sqlite.org/) and [React](https://reactjs.org/).

# :bug: Issues

Feel free to **file a new issue** with a respective title and description. If you already found a solution to your problem, **I would love to review your pull request**!

# 💡 Author

- Flávio Aquila ([@Icegreen](https://twitter.com/Icegreen__))

# :tada: Contributing

Check out the [contributing](https://github.com/Icegreeen/backseasy/blob/master/CONTRIBUTING.MD) page to see the best places to file issues, start discussions and begin contributing


