<template lang="pug">

.div
    menuApp(:isActive_2='isActive_2')
    .container
      .row
       .col-md-12.modal-window
        button(type="button" class="btn btn-outline-dark add" data-toggle="modal" data-target="#exampleModalCenter") Добавь список

        .modal-fade(id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style="display: none;")
            .modal-dialog.modal-dialog-centered(role="document")
                .modal-content
                    .modal-header
                         h5.modal-title(id="exampleModalLabel") Новый товар
                         button( type="button" class="close" data-dismiss="modal" aria-label="Close")
                             span(aria-hidden="true") &times;
                    .modal-body
                        form
                            .form-group
                                label(for="recipient-name" class="col-form-label") Название списка:
                                input(type="text" class="form-control" id="recipient-name")
                            .form-group
                                label(for="message-text" class="col-form-label") Товары:
                                textarea.form-control(id="message-text")
                    .modal-footer
                        button( type="button" class="btn btn-secondary" data-dismiss="modal") Закрыть
                        button(type="button" class="btn btn-primary") Добавить товары

        .card-columns
            .card.p-3
                blockquote.blockquote.mb-0.card-body
                    h5.card-title Название списка
                    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                    footer.blockquote-footer 
                        small.text-muted  Someone famous in 
            .card.p-3
                blockquote.blockquote.mb-0.card-body
                    h5.card-title Название списка
                    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                    footer.blockquote-footer 
                        small.text-muted  Someone famous in 
            .card.p-3
                blockquote.blockquote.mb-0.card-body
                    h5.card-title Название списка
                    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                    footer.blockquote-footer 
                        small.text-muted  Someone famous in 
            .card.p-3
                blockquote.blockquote.mb-0.card-body
                    h5.card-title Названиее списка
                    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                    footer.blockquote-footer 
                        small.text-muted  Someone famous in 


</template> 
<script>
    import menuApp from './menuApp'
    export default {
        name: 'buy',
        data: function () {
            return {
               isActive_2: true
            }
        },
        components: { 'menuApp': menuApp},
        created: function() {
            window.document.title = "Список покупок"
        }  
    }
</script>

<style scoped lang="scss">
    .modal-dialog-centered {
        z-index: 10000;
    }

    .btn-outline-dark.add {
        margin-top: 1%;
    }
    
    .card-columns {
        margin-top: 1%;
    }
    @media (max-width: 475px) {
          .modal-content {
	          padding: 0;
        } 
    } 

    @media (min-width: 585px) and (max-width: 991px) {
        .col-md-12.modal-window {
            padding-left: 0 !important;
        }
    }
</style>