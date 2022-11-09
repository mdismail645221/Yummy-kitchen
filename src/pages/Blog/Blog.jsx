import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 my-20">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-2xl md:text-4xl font-bold leading-none text-center primary-color">INPORTANCE INTERVIEW QUESTION <br></br> & ANSWER</h2>
                <div className="divide-y divide-orange-700">
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">Difference between SQL and NoSQL?</h3>
                        <div className="md:pl-0 md:col-span-7 text-justify">
                            <p><strong>SQL:</strong>SQL database are primary called RDMMS or Relation Database. Structure query language 'SQL'. SQL database are table bassed database. SQL database have a predifined schema. Oracale, postgres, MySQL, MS-SQL</p>
                            <p><strong>NoSQL</strong>NoSQL database are primary called as non-relation or distributed database. No declarative query language. NoSQL dabase can be document based key-value pairs, groups database. NoSQL database user dynamic scheme for unttructured data. Mongodb, Radis, Neo4J, Cassandra, Hbase</p>
                        </div>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">What is JWT?, and how does it work?</h3>
                        <p className="md:pl-0 md:col-span-7 text-justify">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWT is different other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">What is the difference between javascript and Node JS?</h3>
                        <p className="md:pl-0 md:col-span-7 text-justify"><strong>Javascript:</strong>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. <br></br>
                        <strong>Node JS:</strong>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.

                        </p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">How does Node JS handle multiple requests at the same time?</h3>
                        <p className="md:pl-0 md:col-span-7 text-justify">How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;