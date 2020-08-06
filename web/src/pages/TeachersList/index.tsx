import React from 'react'

import './style.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

function TeachersList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form  id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria : </label>
                        <input type="text" id="subject"></input>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana : </label>
                        <input type="text" id="week_day"></input>
                    </div>

                    <div className="input-block">
                        <label htmlFor="timer">Hora : </label>
                        <input type="text" id="timer"></input>
                    </div>

                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>

        </div>
    )
}

export default TeachersList