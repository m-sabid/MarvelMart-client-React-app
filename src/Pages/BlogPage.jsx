import Footer from "../components/shared/Footer";
import TopNav from "../components/shared/TopNav";
import useDynamicTitle from "../components/shared/useDynamicTitle";
import { FaLock, FaDatabase, FaServer, FaQuestionCircle } from "react-icons/fa";

const BlogPage = () => {
  useDynamicTitle("Blog");
  return (
    <>
      <TopNav />
      <div className="bg-neutral2 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Blog Page</h1>
<hr />
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">
                Access Token and Refresh Token
              </h2>
              <div className="flex items-center mb-4">
                <FaLock className="text-primary mr-2" />
                <span>
                  Access Token and Refresh Token are used for authentication and
                  authorization in web applications.
                </span>
              </div>
              <p>
                Access Token is a short-lived token that is obtained by the
                client (usually after providing credentials) and sent with each
                request to authenticate the user.
              </p>
              <p>
                Refresh Token is a long-lived token that is used to obtain a new
                Access Token when the current one expires. It is securely stored
                on the client-side, typically in an HTTP-only cookie or local
                storage.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">
                SQL vs. NoSQL Databases
              </h2>
              <div className="flex items-center mb-4">
                <FaDatabase className="text-primary mr-2" />
                <span>
                  SQL (Structured Query Language) and NoSQL (Not only SQL) are
                  two different types of databases.
                </span>
              </div>
              <p>
                SQL databases are relational databases that use tables to store
                structured data. They have a predefined schema, support ACID
                (Atomicity, Consistency, Isolation, Durability) transactions,
                and are suitable for complex queries and relationships between
                data.
              </p>
              <p>
                NoSQL databases are non-relational databases that store data in
                flexible, schema-less formats like key-value pairs, documents,
                graphs, or columns. They offer high scalability, faster
                read/write performance, and are ideal for handling large amounts
                of unstructured or semi-structured data.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Express.js and Nest.js</h2>
              <div className="flex items-center mb-4">
                <FaServer className="text-primary mr-2" />
                <span>
                  Express.js and Nest.js are popular frameworks for building web
                  applications with Node.js.
                </span>
              </div>
              <p>
                Express.js is a minimalistic and flexible framework that
                provides a set of tools for building web applications and APIs
                using Node.js. It focuses on simplicity, allowing developers to
                create server-side logic with ease.
              </p>
              <p>
                Nest.js, on the other hand, is a full-featured framework built
                on top of Express.js. It provides a structured and opinionated
                way to develop scalable and maintainable server-side
                applications. Nest.js leverages decorators, dependency
                injection, and modular architecture to enhance productivity and
                code organization.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">MongoDB Aggregate</h2>
              <div className="flex items-center mb-4">
                <FaQuestionCircle className="text-primary mr-2" />
                <span>
                  MongoDB Aggregate is a powerful feature that allows advanced
                  data processing and analysis in MongoDB.
                </span>
              </div>
              <p>
                Aggregate in MongoDB is a pipeline-based framework that enables
                developers to perform complex data transformations,
                aggregations, and computations. It provides a set of stages,
                such as matching, grouping, sorting, projecting, and more, that
                can be combined to perform advanced queries.
              </p>
              <p>
                With the aggregate framework, developers can perform tasks like
                filtering, grouping, joining, and statistical analysis on data
                stored in MongoDB collections. It offers a flexible and
                efficient way to process data and retrieve meaningful results.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
