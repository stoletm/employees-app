import "./app-info.css";

const AppInfo = (props) => {
    const {employeesQuantity, increased} = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Company</h1>
            <h2>Общее число сотрудников: {employeesQuantity}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}
export default AppInfo;