//change tag name hack - 12/24 update

<script type="text/javascript">

     $('finalinput.field:not(.field2)').replaceWith(function() {
       return $('<input maxlength="50" name="email_address_" tabindex="1" class="field" type="text" id="email_address_" value="$lookup(EMAIL_ADDRESS_)$" placeholder="Email" />', { html: $(this).html() });
     });

     $('finalinput.field2').replaceWith(function() {
       return $('<input maxlength="50" name="ConfEmail" id="ConfEmail" value="" tabindex="2" class="field field2" type="text" placeholder="Confirm Email" />', { html: $(this).html() });
     });

     $('finalinput.submit').replaceWith(function() {
       return $('<input type="submit" name="submit" value="Submit" class="submit" style="inline-block;" /><p style="display:inline-block; margin-bottom: 20px; margin-top:0;"><a href="http://www.rei.com/help/privacy-policy.html?cm_mmc=email_com_prefs-_-login-_-body-_-bt_privacy" class="policy">See our Privacy Policy</a></p>', { html: $(this).html() });
     });
                         
</script>