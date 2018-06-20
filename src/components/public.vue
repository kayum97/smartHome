<template lang="pug">
.div
    menuApp(:isActive_3='isActive_3')
    .container
        .row
            .col-md-12.modal-window
                button.btn.btn-outline-dark(type="button" data-toggle="modal" data-target="#modal_market") Добавь рекламу
                button.btn.btn-outline-dark(type="button" data-toggle="modal" data-target="#modal_public") Добавь паблик

                .modal.fade(id="modal_market" tabindex="-1" role="dialog" aria-labelledby="modal_marketTitle" aria-hidden="true" style="display: none;")
                    .modal-dialog.modal-dialog-centered(role="document")
                        .modal-content
                            .modal-header
                                h5.modal-title#modal_market Новая реклама
                                button(type="button" class="close" data-dismiss="modal" aria-label="Close")
                                    span(aria-hidden="true") &times;
                            .modal-body
                                form
                                    .form-group
                                        select.custom-select#inputGroupSelect02
                                            option(selected) Паблик
                                            option(value="1") Актюба Life
                                            option(value="2") Нижняя Мактама Life
                                            option(value="3") Сарманово Life
                                    .form-group
                                        label(for="recipient-name" class="col-form-label") Рекломадатель
                                        input(type="text" class="form-control" id="recipient-name")
                                    .form-group
                                        label(for="recipient-profail" class="col-form-label") Ссылка на профиль
                                        input(type="text" class="form-control" id="recipient-profail")
                                    .form-group
                                        label(for="recipient-dateStart" class="col-form-label") Дата начала
                                        input(type="date" class="form-control" id="recipient-dateStart")
                                    .form-group
                                        label(for="recipient-dateEnd" class="col-form-label") Дата окончания
                                        input(type="date" class="form-control" id="recipient-dateEnd")
                                    .form-group
                                        label(for="recipient-dateMoney" class="col-form-label") Стоимость
                                        input(type="number" class="form-control" id="recipient-dateMoney")
                            .modal-footer
                                button( type="button" class="btn btn-secondary" data-dismiss="modal") Закрыть
                                button(type="button" class="btn btn-primary") Добавить

                .modal-fade(id="modal_public" tabindex="-1" role="dialog" aria-labelledby="modal_publicTitle" aria-hidden="true" style="display: none;")
                    .modal-dialog.modal-dialog-centered(role="document")
                        .modal-content
                            .modal-header
                                h5.modal-title(id="modal_public") Новый паблик
                                button( type="button" class="close" data-dismiss="modal" aria-label="Close")
                                    span(aria-hidden="true") &times;
                            .modal-body
                                form
                                    .form-group
                                        label(for="recipient-public" class="col-form-label") Название паблика
                                        input(type="text" class="form-control" id="recipient-public")
                            .modal-footer
                                button.btn.btn-secondary( type="button" data-dismiss="modal") Закрыть
                                button.btn.btn-primary(type="button") Добавить
                nav
                    .nav.nav-tabs(id="nav-tab" role="tablist")
                        table.table-responsive.table-public
                            thead
                                tr
                                    th
                                        a.nav-item.nav-link.active(id="nav-aktuba-tab" data-toggle="tab" href="#nav-aktuba" role="tab" aria-controls="nav-aktuba" aria-selected="true") Актюба
                                    th
                                        a.nav-item.nav-link(id="nav-maktama-tab" data-toggle="tab" href="#nav-maktama" role="tab" aria-controls="nav-maktama" aria-selected="false") Нижняя Мактама
                                    th
                                        a.nav-item.nav-link(id="nav-sarmanovo-tab" data-toggle="tab" href="#nav-sarmanovo" role="tab" aria-controls="nav-sarmanovo" aria-selected="false") Сарманово
                                    th
                                        a.nav-item.nav-link(id="nav-aznakaevo-tab" data-toggle="tab" href="#nav-aznakaevo" role="tab" aria-controls="nav-aznakaevo" aria-selected="false") Азнакаево
                .tab-content(id="nav-tabContent")
                    .tab-pane.fade.show.active(id="nav-aktuba" role="tabpanel" aria-labelledby="nav-aktuba-tab")
                        #accordion
                            .card
                                .card-header#headingOne
                                    h5.mb-0
                                        button.btn.btn-link.collapsed(data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne") Июнь
                                #collapseOne.collapse(aria-labelledby="headingOne" data-parent="#accordion")
                                    .card-body
                                        table.table.table-striped.table-responsive
                                            thead
                                                tr
                                                    th(scope="col") id
                                                    th(scope="col") Имя
                                                    th(scope="col") Ссылка
                                                    th(scope="col") Начало
                                                    th(scope="col") Конец
                                                    th(scope="col") Стоимость
                                                    th(scope="col") Оплата
                                                    th(scope="col") Дата оплаты
                                            tbody
                                                tr
                                                    th(scope="row") 1
                                                    th(scope="row") Таслия
                                                    th(scope="row") http://vk.com
                                                    th(scope="row") 25.05.2018
                                                    th(scope="row") 25.06.2018
                                                    th(scope="row") 700
                                                    th(scope="row") Да
                                                    th(scope="row") 25.05.2018
                        #accordion
                            .card
                                .card-header#headingTwo
                                    h5.mb-0
                                        button.btn.btn-link.collapsed(data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo") Июль
                                #collapseTwo.collapse(aria-labelledby="headingTwo" data-parent="#accordion")
                                    .card-body
                                        table.table.table-striped.table-responsive
                                            thead
                                                tr
                                                    th(scope="col") id
                                                    th(scope="col") Имя
                                                    th(scope="col") Ссылка
                                                    th(scope="col") Начало
                                                    th(scope="col") Конец
                                                    th(scope="col") Стоимость
                                                    th(scope="col") Оплата
                                                    th(scope="col") Дата оплаты
                                            tbody
                                                tr
                                                    th(scope="row") 1
                                                    th(scope="row") Таслия
                                                    th(scope="row") http://vk.com
                                                    th(scope="row") 25.05.2018
                                                    th(scope="row") 25.06.2018
                                                    th(scope="row") 700
                                                    th(scope="row") Да
                                                    th(scope="row") 25.05.2018
                    .tab-pane.fade(id="nav-maktama" role="tabpanel" aria-labelledby="nav-maktama-tab")
                        table.table.table-striped.table-responsive
                            thead
                                tr
                                    th(scope="col") id
                                    th(scope="col") Имя
                                    th(scope="col") Ссылка
                                    th(scope="col") Начало
                                    th(scope="col") Конец
                                    th(scope="col") Стоимость
                                    th(scope="col") Оплата
                                    th(scope="col") Дата оплаты
                            tbody
                                tr
                                    th(scope="row") 2

                    .tab-pane.fade(id="nav-sarmanovo" role="tabpanel" aria-labelledby="nav-sarmanovo-tab")
                        table.table.table-striped.table-responsive
                            thead
                                tr
                                    th(scope="col") id
                                    th(scope="col") Имя
                                    th(scope="col") Ссылка
                                    th(scope="col") Начало
                                    th(scope="col") Конец
                                    th(scope="col") Стоимость
                                    th(scope="col") Оплата
                                    th(scope="col") Дата оплаты
                            tbody
                                tr
                                    th(scope="row") 3
                    .tab-pane.fade(id="nav-aznakaevo" role="tabpanel" aria-labelledby="nav-aznakaevo-tab")
                        table.table.table-striped.table-responsive
                            thead
                                tr
                                    th(scope="col") id
                                    th(scope="col") Имя
                                    th(scope="col") Ссылка
                                    th(scope="col") Начало
                                    th(scope="col") Конец
                                    th(scope="col") Стоимость
                                    th(scope="col") Оплата
                                    th(scope="col") Дата оплаты
                            tbody
                                tr
                                    th(scope="row") 4

</template>

<script>
    import menuApp from './menuApp'
    export default {
        name: 'publics',
        components: { 'menuApp': menuApp},
        data: function () {
            return {
               isActive_3: true
            }
        },
        created: function() {
            window.document.title = "Паблики"
        }
    }
</script>

<style scoped lang="scss">
    .modal-dialog-centered {
        z-index: 10000;
    }
    .btn-outline-dark {
        margin: 1% 1% 1% 0;
    }
    nav {
        marfin-top: 5%;
        a {
            color: #000;
            font-weight: normal;
            &:hover {
                background-color: #343a40;
                border-color: #343a40;
                color: #fff;
            }
        }
    }
    .table-public {
        border: none;
    }
    @media (min-width: 585px) and (max-width: 991px) {
        .col-md-12.modal-window {
            padding-left: 0 !important;
        }
        nav {
            padding-left: 0 !important;
        }
    }
</style>