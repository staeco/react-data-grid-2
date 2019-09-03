import React, { PureComponent } from "react"
import Grid from "../lib"
import "../dist/react-data-grid.css"
import "./app.sass"

const columns = [
  { key: "id", name: "ID", sortable: true },
  { key: "title", name: "Title", sortable: true },
  { key: "complete", name: "Complete", sortable: true },
]

const rows = [
  { id: 0, title: "Task 1", complete: 20 },
  { id: 1, title: "Task 2", complete: 100 },
  { id: 2, title: "Task 3", complete: 60 },
]

const sortRows = (initialRows, sortColumn, sortDirection) => (rows) => {
  const comparer = (a, b) => {
    if (sortDirection === "ASC") {
      return a[sortColumn] > b[sortColumn] ? 1 : -1
    } else if (sortDirection === "DESC") {
      return a[sortColumn] < b[sortColumn] ? 1 : -1
    }
  }
  return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer)
}

export default class App extends PureComponent {
  state = {
    sortColumn: "id",
    sortDirection: "ASC",
    rows,
  }
  onGridSort = (sortColumn, sortDirection) => {
    this.setState({ loading: true }, () => {
      setTimeout(() => {
        const updated = sortRows(rows, sortColumn, sortDirection)(
          this.state.rows
        )
        this.setState({
          sortColumn,
          sortDirection,
          rows: updated,
          loading: false,
        })
      }, 1000)
    })
  }
  render = () => {
    const rowGetter = (i) => this.state.rows[i]
    return (
      <div className="app">
        <h3>Sort with a 2s delay replicating "network" actions</h3>
        <Grid
          columns={columns}
          rowGetter={rowGetter}
          rowsCount={this.state.rows.length}
          onGridSort={this.onGridSort}
          sortColumn={this.state.sortColumn}
          sortDirection={this.state.sortDirection}
        />
      </div>
    )
  }
}
