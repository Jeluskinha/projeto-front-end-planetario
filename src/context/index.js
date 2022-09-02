import { BlogProvider } from './blog';
import { DashboardProvider } from './dashboard';
import { PostsProvider } from './posts';


const Providers = ({ children }) => {
    return (
        <BlogProvider>
            <DashboardProvider>
                <PostsProvider>
                    {children}
                </PostsProvider>
            </DashboardProvider>
        </BlogProvider>
    )
};

export default Providers;