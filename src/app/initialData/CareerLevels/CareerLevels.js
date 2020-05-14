import React, {Component} from "react";
import {connect} from "react-redux";

import MyMaterialTable from "../../component/table/MyMaterialTable";
import classes from './CareerLevels.module.css'
import {addIncomePoint, deleteIncomePoint, updateIncomePoints} from "./CareerLevelsActions";

const pauseTime = 500;

class CareerLevels extends Component {

    render() {
        return (
            <div className={classes.IncomePoints}>
                <div className={classes.DataTable}>
                    <MyMaterialTable
                        title={'Составляющая дохода'}
                        headers={this.props.headers}
                        data={Object.values(this.props.points)}
                        editable={{
                            // isEditable: rowData => true, // only name(a) rows would be editable
                            // isDeletable: rowData => true, // only name(a) rows would be deletable
                            onRowAdd: newData =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        {
                                            this.props.addIncomePoint(newData);
                                        }
                                        resolve();
                                    }, pauseTime);
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        {
                                            this.props.updateIncomePoints(newData)
                                        }
                                        resolve();
                                    }, pauseTime);
                                }),
                            onRowDelete: oldData =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        {
                                            this.props.deleteIncomePoint(oldData.id);
                                        }
                                        resolve();
                                    }, pauseTime);
                                })
                        }}
                    />
                </div>
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        headers: state.incomePointsReducer.headers,
        points: state.incomePointsReducer.points
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addIncomePoint: (point) => dispatch(addIncomePoint(point)),
        deleteIncomePoint: (id) => dispatch(deleteIncomePoint(id)),
        updateIncomePoints: (point) => dispatch(updateIncomePoints(point)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CareerLevels);
