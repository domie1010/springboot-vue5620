const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootniyfl/",
            name: "springbootniyfl",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootniyfl/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "无人智慧超市管理系统"
        } 
    }
}
export default base
