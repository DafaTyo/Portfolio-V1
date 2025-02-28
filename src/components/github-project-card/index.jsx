import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GithubProjectCard = (props) => {
    const { style } = props;
    const [repos, setRepos] = useState([]);
    const [colors, setColors] = useState({});
    const [loading, setLoading] = useState(true);
    const username = 'dafaTyo';

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [reposResponse, colorsResponse] = await Promise.all([
                    axios.get(`https://api.github.com/users/${username}/repos`),
                    axios.get("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json")
                ]);
                
                setRepos(reposResponse.data);
                setColors(colorsResponse.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const SkeletonRepoCard = () => (
        <div className="p-8 w-full h-full rounded-lg bg-white shadow-lg flex flex-col animate-pulse">
            <div className="flex gap-2">
                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                <div className="h-5 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="mt-2 mb-5">
                <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="flex justify-between items-center mt-auto">
                <div className="flex gap-3">
                    <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-6"></div>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-6"></div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-gray-200 rounded-full mr-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                </div>
            </div>
        </div>
    );

    return (
        <div className={`${style || ""} bg-white rounded-lg p-4 flex flex-col gap-2 bg-opacity-40 shadow-lg`}>
            <div className="flex justify-between items-center mx-3 mb-2">
                <h1 className="font-semibold text-xl text-gray-600">Github Projects</h1>
                <Link to={`https://github.com/${username}`} target="_blank" className="text-sm hover:underline">See All</Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {loading ? (
                    Array(4).fill(0).map((_, index) => (
                        <SkeletonRepoCard key={`skeleton-${index}`} />
                    ))
                ) : (
                    repos.map((repo) => (
                        <Link to={repo.html_url} target="_blank" key={repo.id} className="p-8 w-full h-full rounded-lg bg-white shadow-lg flex flex-col">
                            <div className="flex gap-2 font-semibold text-gray-600">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="my-auto" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                                </svg>
                                {repo.name}
                            </div>
                            <div className="mb-5 mt-1 text-sm text-gray-500">{repo.description}</div>
                            <div className="flex justify-between items-center mt-auto">
                                <div className="flex gap-3">
                                    <div className="flex items-center text-gray-600 gap-1">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="mr-0.5" height="0.9em" width="0.9em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                                        </svg>
                                        <h1 className="text-sm">{repo.stargazers_count}</h1>
                                    </div>
                                    <div className="flex items-center text-gray-600 gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-0.5" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z" fill="currentColor"/>
                                        </svg>
                                        <h1 className="text-sm">{repo.watchers_count}</h1>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full mr-1 opacity-60" style={{ backgroundColor: colors[repo.language]?.color || "#ccc" }}></div>
                                    <span className="text-xs text-gray-500">{repo.language}</span>
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}

export default GithubProjectCard;