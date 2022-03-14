<tbody>
    <?php
    
    $wordCount = $_REQUEST['word_c'];
        $default_service_type = $_REQUEST['default_service_type'];

        //print_r($_REQUEST);

    foreach ($totalCountRes as $key => $res) {


        if ($res->upto_words == $upto_words) {
            foreach ($totalCountRes_price as $key => $avilable_options) :
                $word_cost = $avilable_options->word_cost;
                $totalCost = $wordCount * $word_cost;
            ?>
                <tr class="select_order_price" id="words_cost_tr_<?php echo $key;?>">

                    <td class="listTitle"><?php echo $default_service_type;?></td>
                    <td class="wordsCount"><?php echo number_format($wordCount); ?> words completed within <?php echo $avilable_options->time_frame; ?> </td>
                    <td class="cost"><label for="words_cost_<?php echo $key;?>">$<?php echo number_format_i18n( $totalCost, 2 ); ?></label></td>
                    <td class="choose">
                        <input type="radio" checked name="words_cost" id="words_cost_<?php echo $key;?>" class="service_radio" data-timeframe="<?php echo  $avilable_options->time_frame; ?>" value="<?php echo $totalCost; ?>">
                    </td>
                </tr>

            <?php

            endforeach;


            //continue;
        } else { ?>
            <tr class="disabled">
                <td class="listTitle"><?php echo $default_service_type;?></td>
                <td class="wordsCount"colspan="3"><?php echo number_format($res->upto_words); ?> words completed within <?php echo $res->time_frame; ?></td>
            </tr>
        <?php } ?>
    <?php } ?>
</tbody>