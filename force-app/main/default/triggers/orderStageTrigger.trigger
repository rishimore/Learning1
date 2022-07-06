trigger orderStageTrigger on Order (before update) {
        OrderHandler.restrictStage(trigger.New, trigger.oldMap);
}