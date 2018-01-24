import React ,{ Component } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <AddTodo 
                   onAddClick={text=>
                    console.log('add tofo', text)
                }
                />
                <TodoList
                   todos={[{
                     text: 'Use Redux',
                     completed: true
                   },{
                     text: 'Learn to connect it to React',
                     completed: false
                   }]}
                   onTodoClick={todo=>
                    console.log('todo clicked', todo)
                   }
                />
                <Footer 
                    filter='SHOW_ALL'
                    onFilterChange={filter=>
                        console.log('filter change', filter)
                    }
                />
            </div>
        )
    }
}

/**
 * 连接到Redux
 * 我们需要做出两个变化，将app组件连接到Redux并且让它能够dispatch actions以
 * 及从Redux store读取到state。首先我们需要获取从之前安装好的React-redux提
 * provider，并且在渲染之前将根组件包装进<Provider>
 */
