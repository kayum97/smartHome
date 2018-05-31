<template lang="pug">
.div
    menuApp(:isActive_3='isActive_3')
    .container
        .row
            .col-md-12.modal-window
                button(type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#modal_market") Добавь рекламу
                button(type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#modal_public") Добавь паблик

                .modal-fade(id="modal_market" tabindex="-1" role="dialog" aria-labelledby="modal_marketTitle" aria-hidden="true" style="display: none;")
                    .modal-dialog.modal-dialog-centered(role="document")
                        .modal-content
                            .modal-header
                                h5.modal-title(id="modal_market") Новая реклама
                                button( type="button" class="close" data-dismiss="modal" aria-label="Close")
                                    span(aria-hidden="true") &times;
                            .modal-body
                                form
                                    .form-group
                                        select.custom-select(id="inputGroupSelect02")
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
                                button( type="button" class="btn btn-secondary" data-dismiss="modal") Закрыть
                                button(type="button" class="btn btn-primary") Добавить

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
        margin: 1% 1% 0 0;
    }
@media (min-width: 585px) and (max-width: 991px) {
        .col-md-12.modal-window {
            padding-left: 0 !important;
        }
    }
</style>