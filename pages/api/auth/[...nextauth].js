import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const data = {
          email: credentials.email,
          password: credentials.password,
        };

        const options = {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        };

        // Add logic here to look up the user from the credentials supplied
        let user = await fetch(
          "https://mercurius-backend.up.railway.app/api/users/verify/",
          options
        ).then((res) => res.json());

        if (user.fullname) {
          // Any object returned will be saved in `user` property of the JWT

          const loginUser = await fetch(
            "https://mercurius-backend.up.railway.app/api/users/login/",
            options
          ).then((res) => res.json());

          if (loginUser.error) {
            return null;
          } else {
            return user;
          }
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
        }
      },
    }),
  ],
});
