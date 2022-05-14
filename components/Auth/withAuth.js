import {withSSRContext} from 'aws-amplify'
function requireAuthentication(gssp) {
    return async (context) => {
        const { req, res } = context;
        const token = req.cookies.userToken;
       const {Auth} = withSSRContext({req})
       const user = await Auth.currentSession().then().catch(err => console.log(err))
        if (!user) {
            // Redirect to login page
            return {
                redirect: {
                    destination: '/login',
                    statusCode: 302
                }
            };
        }

        return await gssp(context); // Continue on to call `getServerSideProps` logic
    }
}

export default requireAuthentication