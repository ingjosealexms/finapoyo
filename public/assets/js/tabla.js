

    // Agrega un evento de clic al botón
    document.getElementById("add").onclick = function () {
        // Obtiene el valor del cuadro de entrada
        var id_text = document.getElementById("id").value;
        var name_text = document.getElementById("name").value;
        var sex_text = document.getElementById("sex").value;

        // Para instalar id en td, primero cree el nodo td
        var td_id_node = document.createElement("td");
        // El valor ingresado es texto, no un nodo. Si desea agregarlo a través de un nodo, debe convertirse en un nodo de texto
        var id_text_node = document.createTextNode(id_text);
        // Agregar nodo de identificación
        td_id_node.appendChild(id_text_node);

        // Para cargar el nombre en td, primero cree el nodo td
        var td_name_node = document.createElement("td");
        // El valor ingresado es texto, no un nodo. Si desea agregarlo a través de un nodo, debe convertirse en un nodo de texto
        var name_text_node = document.createTextNode(name_text);
        // Agregar nombre de nodo
        td_name_node.appendChild(name_text_node);

        // Para cargar sexo en td, primero crea un nodo td
        var td_sex_node = document.createElement("td");
        // El valor ingresado es texto, no un nodo. Si desea agregarlo a través de un nodo, debe convertirse en un nodo de texto
        var sex_text_node = document.createTextNode(sex_text);
        // Agregar nodo sexual
        td_sex_node.appendChild(sex_text_node);

        // Eliminar para instalar en td, pero no, así que cree un hipervínculo primero y luego agregue un nodo de texto "eliminar"
        var ele_a = document.createElement("a");
        // Establecer el atributo href
        ele_a.setAttribute("href","javascript:void(0);");
        // Establecer el atributo onclick
        ele_a.setAttribute("onclick","del_tr(this);");
        // Convertir eliminar en un nodo de texto
        var del_node = document.createTextNode("Eliminar");
        // Realizar hipervínculo
        ele_a.appendChild(del_node);
        // Crear nodo td
        var td_del_node = document.createElement("td");
        // Agregar eliminar hipervínculo
        td_del_node.appendChild(ele_a);

        // Agrega 4 td a tr, tr no lo es, crea tr primero
        var tr_node = document.createElement("tr");
        // tr agregar td
        tr_node.appendChild(td_id_node);
        tr_node.appendChild(td_name_node);
        tr_node.appendChild(td_sex_node);
        tr_node.appendChild(td_del_node);

        // tabla agrega tr, hay una tabla, para convertirse en un nodo
        var table_node = document.getElementsByTagName("table")[0];
        table_node.appendChild(tr_node);
    }
    del_tr = function (obj) {// Devuelto es el objeto de la etiqueta a
        // Eliminar nodos secundarios a través del nodo principal
        // Elimina tr a través de la tabla, obtén el nodo de la tabla primero
        var table_node = obj.parentNode.parentNode.parentNode;
        table_node.removeChild(obj.parentNode.parentNode);
    }
