$(document).ready(function() {
    $('#example').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'collection',
                className: 'custom-html-collection',
                buttons: [
                    '<h3>Export</h3>',
                    'pdf',
                    'csv',
                    'excel',
                    '<h3 class="not-top-heading">Column Visibility</h3>',
                    'colvis',
                    'colvis'
                ]
            }
        ]
    } );
} );