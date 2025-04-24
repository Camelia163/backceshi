const base = {
    get() {
        return {
            url : "http://localhost:8080/ceshi/",
            name: "ceshi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ceshi/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "勤工助学管理系统"
        } 
    }
}
export default base
